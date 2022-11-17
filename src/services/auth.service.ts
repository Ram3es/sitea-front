import { ENDPOINTS } from '@constants/api-endpoints';
import { POST } from './api';

export const googleAuth = (data: { token: string }) =>
  POST(`${ENDPOINTS.google}/auth`, data);
