import { errorMessage } from '@constants/pop-up';
import { useMetamask } from '@screens/auth/metamask-login/metamask-login.state';
import { useNear } from '@screens/auth/near-login/near.state';
import { addMetamaskWallet, addNearWallet } from '@services/user.service';
import { loginUser } from '@store/reducers/user.slice';
import { useAppDispatch, useAppSelector } from '@store/store';
import axios from 'axios';

import { trackPromise } from 'react-promise-tracker';

export const useProfileState = () => {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const metamaskBtnHadler = async () => {
    const getMetamaskAccount = useMetamask();
    const account = await getMetamaskAccount();

    if (account) {
      const wallet = account[0];
      try {
        const { data } = await trackPromise(
          addMetamaskWallet({ wallet, userId: user.id })
        );

        dispatch(loginUser(data));
      } catch (error) {
        if (axios.isAxiosError(error)) {
          return errorMessage(error?.response?.data.message).fire();
        }
      }
    }
  };

  const nearBtnHandler = async () => {
    const connect = useNear();
    const walletConnection = await connect();
    const wallet = walletConnection.getAccountId();
    if (wallet) {
      try {
        const { data } = await trackPromise(
          addNearWallet({ wallet, userId: user.id })
        );

        dispatch(loginUser(data));
      } catch (error) {}
    } else {
      walletConnection.requestSignIn({});
    }
  };
  return { metamaskBtnHadler, nearBtnHandler };
};
