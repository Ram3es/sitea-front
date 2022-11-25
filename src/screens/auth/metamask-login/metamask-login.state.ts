import Web3 from 'web3';

export const useMetamask = () => {
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
        return await web3.eth.getAccounts();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return onConnect;
};
