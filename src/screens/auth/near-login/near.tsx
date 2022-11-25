import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import * as nearAPI from 'near-api-js';

import { ROUTES } from '@constants/routes';
import { Button } from '@components/button';
import { storage } from '@services/storage/storage';
import { trackPromise } from 'react-promise-tracker';
import { nearLogin } from '@services/auth.service';
import { loginUser } from '@store/reducers/user.slice';
import { useAppDispatch } from '@store/store';
import { useNear } from './near.state';

export const NearLoginButton: FC = () => {
  const dispatch = useAppDispatch();

  const useNearLogin = async () => {
    const connect = useNear();
    const walletConnection = await connect();
    const wallet = walletConnection.getAccountId();

    if (wallet) {
      try {
        const { data } = await trackPromise(nearLogin({ wallet }));

        storage.setToken(data.token);
        dispatch(loginUser(data.user));
      } catch (error) {}
    } else {
      walletConnection.requestSignIn({});
    }
  };

  return (
    <Button
      onClick={useNearLogin}
      title="Login with NEAR wallet"
      minWidth={220}
    />
  );
};
