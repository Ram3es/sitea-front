const TOKEN_KEY = 'token';

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
    sessionStorage.removeItem(TOKEN_KEY);
  };
}

export const storage = new StorageService();
