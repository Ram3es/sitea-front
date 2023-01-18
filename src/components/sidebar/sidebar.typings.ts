interface IItems {
  title: string;
  route: string;
  img: string;
  class?: string;
  isLink?: boolean;
}
export interface INavItems {
  user: IItems[];
  admin: IItems[];
}
