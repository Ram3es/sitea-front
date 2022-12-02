import { ROUTES } from '@constants/routes';
import { INavItems } from './sidebar.typings';
export const navItems: INavItems = {
  user: [
    { title: 'Dashboard', route: ROUTES.main },
    { title: 'Staking', route: ROUTES.stacking },
    { title: 'My Profile', route: ROUTES.profile },
  ],
  admin: [{ title: 'Users', route: ROUTES.main }],
};
