import { ENV_VARIABLES } from '@constants/config';
import axios, { AxiosResponse } from 'axios';
import { storage } from './storage';

export const POST = async <T, B = undefined>(
  endPoint: string,
  data?: B
): Promise<AxiosResponse<T>> => getInstance().post(`${endPoint}`, data);

const getInstance = () => {
  const instance = axios.create({
    baseURL: ENV_VARIABLES.API_URL,
    timeout: 20000,
  });
  instance.interceptors.request.use((config) => {
    const token = storage.getToken();

    console.log(config, 'config');

    if (!token) {
      return config;
    }
    config = {
      ...config,
      headers: { Authorization: `Bearer ${token}` },
    };
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
