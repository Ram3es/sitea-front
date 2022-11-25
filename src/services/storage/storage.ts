const TOKEN_KEY = 'token';
const AUTH_KEY = 'isAuthenticated';
const NEAR_ACC_ID = 'near_wallet_auth_key';

class StorageService {
  public setToken = (token: string) => localStorage.setItem(TOKEN_KEY, token);

  public getToken = () => localStorage.getItem(TOKEN_KEY);

  public removeToken = () => localStorage.removeItem(TOKEN_KEY);

  public getNearAccID = () => localStorage.getItem(NEAR_ACC_ID);

  public setIsAuth = () => localStorage.setItem(AUTH_KEY, JSON.stringify(true));

  public getIsAuth = () => localStorage.getItem(AUTH_KEY);

  public removeIsAuth = () => localStorage.removeItem(AUTH_KEY);

  public clearStorage = () => localStorage.clear();
  public clearSessionStorage = () => sessionStorage.clear();
}

export const storage = new StorageService();
