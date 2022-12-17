import { Token } from './token';

export type PoolInfo = {
  address: string;
  networkId: string;
  months: number;
  apy: number;
  details: PoolContractData | null;
  active: boolean;
};

export type PoolContractData = {
  token: Token;
  apy: number;
  stakedTotal: string;
  poolSize: string;
  maturityDays: number;
  launchTime: number;
  launchDate: Date;
  closingTime: number;
  closingDate: Date;
  isOpen: boolean;
  accountStaked: string | null;
  accountMaturityDate: Date | null;
};
