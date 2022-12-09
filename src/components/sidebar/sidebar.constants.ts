import { ROUTES } from '@constants/routes';
import { INavItems } from './sidebar.typings';
export const navItems: INavItems = {
  user: [
    { title: 'Dashboard', route: ROUTES.main, img: 'grid' },
    { title: 'Staking', route: ROUTES.stacking, img: 'coins' },
    { title: 'My Profile', route: ROUTES.profile, img: 'user' },
  ],
  admin: [{ title: 'Users', route: ROUTES.main, img: 'user' }],
};
