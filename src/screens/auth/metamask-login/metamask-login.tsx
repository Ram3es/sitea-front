import { FC } from 'react';
import Web3 from 'web3';

import { Button } from '@components/button';
import { storage } from '@services/storage/storage';
import { ROUTES } from '@constants/routes';
import { useNavigate } from 'react-router';

export const MetamaskButton: FC = () => {
  const navigate = useNavigate();
  const detectedCurrentProvider = () => {
    let provider;
    if (window.ethereum) {
      provider = window.ethereum;
    } else if (window.web3) {
      provider = window.web3.currentProvider;
    } else {
      alert('You should enable Metamask');
    }
    return provider;
  };

  const onConnect = async () => {
    try {
      const currentProvider = detectedCurrentProvider();
      if (currentProvider) {
        await currentProvider.request({
          method: 'eth_requestAccounts',
        });

        const web3 = new Web3(currentProvider);
        const userAccount = await web3.eth.getAccounts();

        if (userAccount[0]) {
          storage.setIsAuth();
          navigate(ROUTES.dashboard);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Button onClick={onConnect} title="Login with Metamask" minWidth={220} />
  );
};
