import * as nearAPI from 'near-api-js';

export const useNear = () => {
  const nearConfig = {
    networkId: 'testnet',
    keyStore: new nearAPI.keyStores.BrowserLocalStorageKeyStore(),
    nodeUrl: 'https://rpc.testnet.near.org',
    walletUrl: 'https://wallet.testnet.near.org',
    helperUrl: 'https://helper.testnet.near.org',
    explorerUrl: 'https://explorer.testnet.near.org',
  };
  const connect = async () => {
    const nearConnection = await nearAPI.connect(nearConfig);
    const walletConnection = new nearAPI.WalletConnection(
      nearConnection,
      'near'
    );
    return walletConnection;
  };
  return connect;
};
