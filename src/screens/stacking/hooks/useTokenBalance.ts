import { useEffect, useState } from 'react';
import { networkId as defaultnetworkId } from '../data/pools';

type Props = {
  account: string | null;
  networkId: string | null;
};

export const useTokenBalance = ({ account, networkId }: Props) => {
  const [balance, setBalance] = useState<string>('0');

  const getBalance = async () => {
    if (!account || networkId !== defaultnetworkId) {
      return;
    }
    // TODO
    const tokenBalance = 15000;
    setBalance(`${tokenBalance}`);
  };

  useEffect(() => {
    getBalance();
    // eslint-disable-next-line
  }, [account]);

  return { balance };
};
