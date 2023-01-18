import { FC, useCallback, useEffect } from 'react';
import { trackPromise } from 'react-promise-tracker';
import { Navigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';

import { useAppDispatch } from '@store/store';
import { loginUser } from '@store/reducers/user.slice';

import { ROUTES } from '@constants/routes';
import { errorMessage } from '@constants/pop-up';

import { storage } from '@services/storage';
import { nearLogin } from '@services/auth.service';
import { addNearWallet } from '@services/user.service';
import { PROMISES_AREA } from '@constants/promises-area';

export const NearSuccessPage: FC = () => {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const wallet = searchParams.get('account_id');
  const userId = searchParams.get('user_id');

  const nearLoginWith = useCallback(async () => {
    if (wallet) {
      try {
        const { data } = await trackPromise(
          nearLogin({ wallet }),
          PROMISES_AREA.login
        );

        storage.setToken(data.token);
        dispatch(loginUser(data.user));
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error(error.message);
          return errorMessage(`Something wrong happend`).fire();
        }
      }
    }
  }, []);

  const addWalletToUser = useCallback(async () => {
    if (userId && wallet) {
      try {
        const { data } = await trackPromise(
          addNearWallet({ wallet, userId }),
          PROMISES_AREA.addNearWallet
        );
        dispatch(loginUser(data));
      } catch (error) {
        if (axios.isAxiosError(error)) {
          return errorMessage('Account with such wallet already exist').fire();
        }
      }
    }
  }, []);

  useEffect(() => {
    userId ? addWalletToUser() : nearLoginWith();
  }, [wallet, userId]);

  return userId ? (
    <Navigate to={ROUTES.profile} />
  ) : (
    <Navigate to={ROUTES.main} />
  );
};
