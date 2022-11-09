import { FC } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { ROUTES } from '@constants/routes';
import { storage } from '@services/storage/storage';

export const PrivateRoutes: FC = () => {
  const token = storage.getIsAuth();

  return token ? (
    <Outlet />
  ) : (
    <Navigate to={ROUTES.login} state={{ from: ROUTES.main }} />
  );
};
