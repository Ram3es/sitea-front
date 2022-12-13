export interface IUser {
  id: number;
  email: string;
  wallet: string;
  lastLogin: string;
  amountLogin: number;
  hoursSpent: number;
}

export interface IHeadCell {
  id: string;
  title: string;
}
export const HEAD_TITLE: IHeadCell[] = [
  { id: 'email', title: 'EMAIL' },
  { id: 'wallets', title: 'WALLET NUMBER' },
  { id: 'lastLogin', title: 'LAST LOGIN' },
  { id: 'amountLogin', title: 'NUMBER OF LOGINS' },
  { id: 'results', title: 'SITTING STRAIGHT HOURS' },
];

export const DEVICE_WIDTH = {
  mobile: '600px',
};
