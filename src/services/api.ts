import { ENV_VARIABLES } from '@constants/config';
import axios, { AxiosResponse } from 'axios';
import { storage } from './storage';

export const POST = async <T, B = undefined>(
  endPoint: string,
  data?: B
): Promise<AxiosResponse<T>> => getInstance().post(`${endPoint}`, data);
export const GET = async <T>(endpoint: string): Promise<AxiosResponse<T>> =>
  getInstance().get(`${endpoint}`);

const getInstance = () => {
  const instance = axios.create({
    baseURL: ENV_VARIABLES.API_URL,
    timeout: 20000,
  });
  instance.interceptors.request.use((config) => {
    const token = storage.getToken();

    if (!token) {
      return config;
    }
    config.headers.set('Authorization', `Bearer ${token}`);
    return config;
  });
  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (
        error?.response?.status === 401 ||
        error?.response?.message === 'Token expired'
      ) {
        storage.clearStorage();
        storage.clearSessionStorage();
      }

      return Promise.reject(error);
    }
  );

  return instance;
};
