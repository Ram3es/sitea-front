import { FC } from 'react';

import { ROUTES } from '@constants/routes';

import { Icon } from '@components/icons';
import { INavItems } from '@components/sidebar/sidebar.typings';
import { navItems } from '@components/sidebar/sidebar.constants';

import { useAppSelector } from '@store/store';
import { storage } from '@services/storage';

import { NavBarStyles as Styled } from './navbar.styles';

export const NavBar: FC = () => {
  const user = useAppSelector((state) => state.user);
  const userRole = user?.role as keyof INavItems;

  const logoutHandler = () => {
    storage.removeToken();
  };

  return (
    <Styled.NavBarWrapper>
      <div>
        {navItems[userRole]?.map((item) => {
          return (
            <Styled.WrapNavElem key={item.title}>
              <Styled.NavElement end={true} to={item.route}>
                <Icon type={item.img} />
                <span>{item.title}</span>
              </Styled.NavElement>
            </Styled.WrapNavElem>
          );
        })}
      </div>

      <Styled.WrapNavElem>
        <Styled.NavElement
          onClick={logoutHandler}
          end={true}
          to={ROUTES.login}
          replace
        >
          <Icon type="logout" />
          <span>Logout</span>
        </Styled.NavElement>
      </Styled.WrapNavElem>
    </Styled.NavBarWrapper>
  );
};
