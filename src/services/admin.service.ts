import { ENDPOINTS } from '@constants/api-endpoints';
import { GET } from './api';

export const getAllUses = () =>
  GET<IUserWithResults[]>(`${ENDPOINTS.user}/${ENDPOINTS.getAllUsers}`);
