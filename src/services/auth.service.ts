import { ENDPOINTS } from '@constants/api-endpoints';
import { POST } from './api';

export const googleAuth = (data: IToken) =>
  POST<ILoginResponse, IToken>(`${ENDPOINTS.google}/auth`, data);

export const walletLogin = (data: IWalletLogin) =>
  POST<ILoginResponse, IWalletLogin>(
    `${ENDPOINTS.auth}${ENDPOINTS.metamaskLogin}`,
    data
  );

export const nearLogin = (data: { wallet: string }) =>
  POST<ILoginResponse, { wallet: string }>(
    `${ENDPOINTS.auth}${ENDPOINTS.nearLogin}`,
    data
  );
