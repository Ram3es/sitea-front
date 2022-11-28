import { ROLES } from '@constants/roles';
import { ROUTES } from '@constants/routes';
import { useAppSelector } from '@store/store';
import { Navigate, Outlet } from 'react-router';

export const PrivateUser = () => {
  const { role } = useAppSelector((state) => state.user);

  return role === ROLES.user ? <Outlet /> : <Navigate to={ROUTES.main} />;
};
