import { FC } from 'react';
import { trackPromise } from 'react-promise-tracker';

import { useAppDispatch } from '@store/store';
import { loginUser } from '@store/reducers/user.slice';

import { Button } from '@components/button';
import { storage } from '@services/storage/storage';
import { walletLogin } from '@services/auth.service';

import { useMetamask } from './metamask-login.state';

export const MetamaskButton: FC = () => {
  const dispatch = useAppDispatch();
  const onConnect = useMetamask();

  const handleConnect = async () => {
    const accountId = await onConnect();

    if (accountId) {
      const wallet = accountId?.[0];
      const { data } = await trackPromise(walletLogin({ wallet }));
      storage.setToken(data.token);

      dispatch(loginUser(data.user));
    }
  };
  return (
    <Button
      onClick={handleConnect}
      title="Login with Metamask"
      minWidth={220}
    />
  );
};
