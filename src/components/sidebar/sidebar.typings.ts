interface IItems {
  title: string;
  route: string;
  img: string;
  class?: string;
}
export interface INavItems {
  user: IItems[];
  admin: IItems[];
}
