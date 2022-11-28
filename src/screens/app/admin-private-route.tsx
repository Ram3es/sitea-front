import { ROLES } from '@constants/roles';
import { ROUTES } from '@constants/routes';
import { useAppSelector } from '@store/store';
import { Navigate, Outlet } from 'react-router';

export const PrivateAdmin = () => {
  const { role } = useAppSelector((state) => state.user);

  return role === ROLES.admin ? <Outlet /> : <Navigate to={ROUTES.main} />;
};
