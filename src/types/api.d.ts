interface Window {
  ethereum: any;
  web3: any;
}

interface IToken {
  token: string;
  userId?: string;
}
interface IWalletLogin {
  wallet: string;
}
interface IWallet {
  id: string;
  wallet: string;
}

interface IUserLogined {
  id: string;
  email: string;
  role: string;
  created: string;
  wallets: IWallet[] | [];
  nearWallets: IWallet[] | [];
}

interface ILoginResponse {
  token: string;
  user: IUserLogined;
}
interface IUserWithResults extends IUserLogined {
  results: IResult[];
  updated: string;
}
interface IResult {
  id: string;
  away: number;
  correct: number;
  hunched: number;
  created: string;
  incorrect: number;
  day: string;
}
