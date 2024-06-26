import axios from 'axios';
import { trackPromise } from 'react-promise-tracker';

import { errorMessage } from '@constants/pop-up';
import { ENV_VARIABLES } from '@constants/config';
import { PROMISES_AREA } from '@constants/promises-area';

import { useAppDispatch, useAppSelector } from '@store/store';
import { loginUser } from '@store/reducers/user.slice';

import { addMetamaskWallet } from '@services/user.service';
import { useNear } from '@screens/auth/near-login/near.state';
import { useMetamask } from '@screens/auth/metamask-login/metamask-login.state';

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
          addMetamaskWallet({ wallet, userId: user.id }),
          PROMISES_AREA.addMetamask
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

    walletConnection.requestSignIn({
      successUrl: `${ENV_VARIABLES.WEB_URL}near-success?user_id=${user.id}`,
      failureUrl: `${ENV_VARIABLES.WEB_URL}near-failure`,
    });
  };
  return { metamaskBtnHadler, nearBtnHandler };
};
