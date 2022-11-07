export interface IUser {
  id: number;
  email: string;
  wallet: string;
  lastLogin: string;
  amountLogin: number;
  hoursSpent: number;
}

export const MOCK_DATA: IUser[] = [
  {
    id: 1,
    email: 'test@testts',
    wallet: '3f6248f1b5fe9896b319f7dabf17d3e3b857aafc8063395c309d14905d485723',
    lastLogin: '13.08.2022',
    amountLogin: 2,
    hoursSpent: 23244,
  },
  {
    id: 2,
    email: 'best@testt',
    wallet: '3f6248f1b5fe9896b319f7dabf17d3e3b857aafc8063395c309d14905d485723',
    lastLogin: '22.08.2022',
    amountLogin: 1,
    hoursSpent: 23244,
  },
  {
    id: 3,
    email: 'best@testt',
    wallet: '3f6248f1b5fe9896b319f7dabf17d3e3b857aafc8063395c309d14905d485723',
    lastLogin: '22.08.2022',
    amountLogin: 1,
    hoursSpent: 23244,
  },
  {
    id: 4,
    email: 'best@testt',
    wallet: '3f6248f1b5fe9896b319f7dabf17d3e3b857aafc8063395c309d14905d485723',
    lastLogin: '22.08.2022',
    amountLogin: 1,
    hoursSpent: 23244,
  },
  {
    id: 5,
    email: 'test@testts',
    wallet: '3f6248f1b5fe9896b319f7dabf17d3e3b857aafc8063395c309d14905d485732',
    lastLogin: '13.08.2022',
    amountLogin: 2,
    hoursSpent: 23244,
  },
  {
    id: 6,
    email: 'best@testt',
    wallet: '3f6248f1b5fe9896b319f7dabf17d3e3b857aafc8063395c309d14905d485723',
    lastLogin: '12.12.1998',
    amountLogin: 8,
    hoursSpent: 23244,
  },
  {
    id: 7,
    email: 'best@testt',
    wallet: '3f6248f1b5fe9896b319f7dabf17d3e3b857aafc8063395c309d14905d485453',
    lastLogin: '11.08.2021',
    amountLogin: 7,
    hoursSpent: 23244,
  },
  {
    id: 8,
    email: 'bestwefwefwefwefwefwef@testt',
    wallet:
      '3f6248f1b5fe9896b319f7dabf17d3e3b857aafc8063395c309d14905d485723 ,3f6248f1b5fe9896b319f7dabf17d3e3b857aafc8063395c309d14905d485723',
    lastLogin: '22.08.2022',
    amountLogin: 5,
    hoursSpent: 232434545,
  },
  {
    id: 9,
    email: 'aram@aram',
    wallet: '3f6248f1b5fe9896b319f7dabf17d3e3b857aafc8063395c309d14905d485723',
    lastLogin: '22.08.2022',
    amountLogin: 1,
    hoursSpent: 23244,
  },
  {
    id: 10,
    email: 'zzzzas@yop.com',
    wallet: '3f6248f1b5fe9896b319f7dabf17d3e3b857aafc8063395c309d14905d485723',
    lastLogin: '22.08.2022',
    amountLogin: 1,
    hoursSpent: 23,
  },
];

export interface IHeadCell {
  id: string;
  title: string;
}
export const HEAD_TITLE: IHeadCell[] = [
  { id: 'email', title: 'EMAIL' },
  { id: 'wallet', title: 'WALLET NUMBER' },
  { id: 'lastLogin', title: 'LAST LOGIN' },
  { id: 'amountLogin', title: 'NUMBER OF LOGINS' },
  { id: 'hoursSpent', title: 'SITTING STRAIGHT HOURS' },
];
