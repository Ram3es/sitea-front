import { PoolInfo } from '../types/pool';

export const networkId = 'testnet';

export const pools: PoolInfo[] = [
  {
    address: '1',
    networkId,
    apy: 10,
    months: 3,
    details: null,
    active: true,
  },
  {
    address: '2',
    networkId,
    apy: 20,
    months: 6,
    details: null,
    active: true,
  },
  {
    address: '3',
    networkId,
    apy: 40,
    months: 12,
    details: null,
    active: true,
  },
];
