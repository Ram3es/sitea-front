import { FC } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { Header } from '@components/header';
import { SideBar } from '@components/sidebar';

import { MainStyles as Styled } from './main.styles';
import { useAppSelector } from '@store/store';
import { ROLES } from '@constants/roles';
import { ROUTES } from '@constants/routes';
import { Dashboard } from '@screens/dashboard';

export const Main: FC = () => {
  const location = useLocation();
  const user = useAppSelector((state) => state.user);

  return (
    <>
      <Header />
      <Styled.Container>
        <SideBar />
        <Styled.Content>
          {location.pathname === ROUTES.main && user.role === ROLES.user && (
            <Dashboard />
          )}
          <Outlet />
        </Styled.Content>
      </Styled.Container>
    </>
  );
};
