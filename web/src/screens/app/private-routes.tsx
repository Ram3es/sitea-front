import { FC } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { ROUTES } from '@constants/routes';

export const PrivateRoutes: FC = () => {
  const auth = { token: true };
  return auth.token ? <Outlet /> : <Navigate to={ROUTES.login} />;
};
