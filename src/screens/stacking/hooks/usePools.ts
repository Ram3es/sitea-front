import { useEffect, useState } from 'react';
import { primaryToken } from '../data/primaryToken';
import { PoolContractData, PoolInfo } from '../types/pool';
import { networkId as defaultNetworkId } from '../data/pools';

type Props = {
  poolsInfo: PoolInfo[];
  account: string | null;
  networkId: string | null;
};

export const usePools = ({ poolsInfo, account, networkId }: Props) => {
  const [pools, setPools] = useState<PoolInfo[]>(poolsInfo);
  const [isLoading, setIsLoading] = useState(false);

  const getPoolContractData = async (poolInfo: PoolInfo) => {
    // TODO
    const now = Date.now();
    const MOCK_POOLS: { [key: string]: PoolContractData } = {
      '1': {
        token: primaryToken,
        apy: 10,
        stakedTotal: `365000`,
        poolSize: `1000000`,
        maturityDays: 90,
        launchTime: now,
        launchDate: new Date(now),
        closingTime: now + 24 * 60 * 60 * 1000,
        closingDate: new Date(now + 24 * 60 * 60 * 1000),
        isOpen: true,
        accountStaked: '150',
        accountMaturityDate: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
      },
      '2': {
        token: primaryToken,
        apy: 20,
        stakedTotal: `156000`,
        poolSize: `1000000`,
        maturityDays: 180,
        launchTime: now,
        launchDate: new Date(now),
        closingTime: now + 24 * 60 * 60 * 1000,
        closingDate: new Date(now + 24 * 60 * 60 * 1000),
        isOpen: true,
        accountStaked: '500',
        accountMaturityDate: new Date(Date.now() + 180 * 24 * 60 * 60 * 1000),
      },
      '3': {
        token: primaryToken,
        apy: 40,
        stakedTotal: `95000`,
        poolSize: `1000000`,
        maturityDays: 365,
        launchTime: now,
        launchDate: new Date(now),
        closingTime: now + 24 * 60 * 60 * 1000,
        closingDate: new Date(now + 24 * 60 * 60 * 1000),
        isOpen: true,
        accountStaked: '480',
        accountMaturityDate: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000),
      },
    };

    return MOCK_POOLS[poolInfo.address];
  };

  const reload = async () => {
    const poolsWithDetails = (
      await Promise.all(
        poolsInfo.map(async (poolInfo) => {
          if (poolInfo.address !== '') {
            const details = await getPoolContractData(poolInfo);
            return { ...poolInfo, details };
          }
          return poolInfo;
        })
      )
    ).filter((poolInfo) => !!poolInfo);
    setPools(poolsWithDetails as any);
  };

  const stakeTokens = async (poolInfo: PoolInfo, amount: number) => {
    try {
      if (!poolInfo.details) {
        return false;
      }
      // TODO
      return true;
    } catch (ex) {
      console.error(ex);
      return false;
    }
  };

  const withdrawTokens = async (poolInfo: PoolInfo) => {
    try {
      if (!poolInfo.details) {
        return false;
      }
      // TODO
      return true;
    } catch (ex) {
      console.error(ex);
      return false;
    }
  };

  useEffect(() => {
    if (networkId !== defaultNetworkId || !account) {
      return;
    }
    (async () => {
      setIsLoading(true);
      await reload();
      setIsLoading(false);
    })();
    // eslint-disable-next-line
  }, [account, networkId]);

  return { pools, isLoading, reload, stakeTokens, withdrawTokens };
};
