import { FC } from 'react';
import { Button } from '@components/button';
import { storage } from '@services/storage/storage';
import { trackPromise } from 'react-promise-tracker';
import { nearLogin } from '@services/auth.service';
import { loginUser } from '@store/reducers/user.slice';
import { useAppDispatch } from '@store/store';
import { useNear } from './near.state';
import { ENV_VARIABLES } from '@constants/config';

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
      walletConnection.requestSignIn({
        successUrl: `${ENV_VARIABLES.WEB_URL}near-success`,
        failureUrl: `${ENV_VARIABLES.WEB_URL}near-failure`,
      });
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
