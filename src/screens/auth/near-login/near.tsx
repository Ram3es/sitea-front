import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import * as nearAPI from 'near-api-js';

import { ROUTES } from '@constants/routes';
import { Button } from '@components/button';
import { storage } from '@services/storage/storage';

export const NearButton: FC = () => {
  const navigate = useNavigate();

  const useNearLogin = async () => {
    const nearConfig = {
      networkId: 'testnet',
      keyStore: new nearAPI.keyStores.BrowserLocalStorageKeyStore(),
      nodeUrl: 'https://rpc.testnet.near.org',
      walletUrl: 'https://wallet.testnet.near.org',
      helperUrl: 'https://helper.testnet.near.org',
      explorerUrl: 'https://explorer.testnet.near.org',
    };

    const near = await nearAPI.connect(nearConfig);
    const wallet = new nearAPI.WalletConnection(near, 'near');

    const accountId = wallet.getAccountId();

    if (accountId) {
      storage.setIsAuth();
      navigate({ pathname: ROUTES.main }, { replace: true });
    } else {
      await wallet.requestSignIn({});
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
