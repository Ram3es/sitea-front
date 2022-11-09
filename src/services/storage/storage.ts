const TOKEN_KEY = 'token';
const AUTH_KEY = 'isAuthenticated';

class StorageService {
  public setToken = (token: string, isRemember: boolean) => {
    return isRemember
      ? localStorage.setItem(TOKEN_KEY, token)
      : sessionStorage.setItem(TOKEN_KEY, token);
  };

  public getToken = () => {
    return localStorage.getItem(TOKEN_KEY) || sessionStorage.getItem(TOKEN_KEY);
  };

  public removeToken = () => {
    localStorage.removeItem(TOKEN_KEY);
  };

  public setIsAuth = () => localStorage.setItem(AUTH_KEY, JSON.stringify(true));
  public getIsAuth = () => localStorage.getItem(AUTH_KEY);
  public removeIsAuth = () => localStorage.removeItem(AUTH_KEY);
}

export const storage = new StorageService();
