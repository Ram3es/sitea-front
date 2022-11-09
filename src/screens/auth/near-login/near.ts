import * as nearAPI from 'near-api-js';

export const useNearLogin = async () => {
  const nearConfig = {
    networkId: 'testnet',
    keyStore: new nearAPI.keyStores.BrowserLocalStorageKeyStore(),
    nodeUrl: 'https://rpc.testnet.near.org',
    walletUrl: 'https://wallet.testnet.near.org',
    helperUrl: 'https://helper.testnet.near.org',
    explorerUrl: 'https://explorer.testnet.near.org',
  };

  const near = await nearAPI.connect(nearConfig);

  const wallet = new nearAPI.WalletConnection(near, null);

  wallet.requestSignIn({ successUrl: 'http://localhost:3000/' });
};
