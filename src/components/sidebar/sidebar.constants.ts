import { ROUTES } from '@constants/routes';
import { INavItems } from './sidebar.typings';
export const navItems: INavItems = {
  user: [
    { title: 'Dashboard', route: ROUTES.main, img: 'grid' },
    {
      title: 'Staking',
      route: 'https://staking.sityea.io/',
      img: 'coins',
      isLink: true,
    },
    { title: 'NFTs', route: ROUTES.NFT, img: 'NFT' },
    {
      title: 'Governance',
      route: ROUTES.governance,
      img: 'bank',
      class: 'stroke',
    },
    { title: 'FAQ', route: ROUTES.FAQ, img: 'chatFaq', class: 'stroke' },
  ],
  admin: [{ title: 'Users', route: ROUTES.main, img: 'user' }],
};
