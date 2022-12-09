interface IItems {
  title: string;
  route: string;
  img: string;
}
export interface INavItems {
  user: IItems[];
  admin: IItems[];
}
