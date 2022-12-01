import { ROUTES } from '@constants/routes';
import { Navigate } from 'react-router-dom';

export const NearFailurePage = () => {
  return <Navigate to={ROUTES.login} />;
};
