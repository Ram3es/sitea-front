import { ENDPOINTS } from '@constants/api-endpoints';
import { GET, POST } from './api';

interface IAddWallet {
  wallet: string;
  userId: string;
}

export const getResultsByUser = (userId: string) =>
  GET<IUserWithResults>(`${ENDPOINTS.user}/get-user-by-id/${userId}`);

export const addMetamaskWallet = (data: IAddWallet) =>
  POST<IUserLogined, IAddWallet>(
    `${ENDPOINTS.user}${ENDPOINTS.addMetamask}`,
    data
  );

export const addNearWallet = (data: IAddWallet) =>
  POST<IUserLogined, IAddWallet>(`${ENDPOINTS.user}${ENDPOINTS.addNear}`, data);
