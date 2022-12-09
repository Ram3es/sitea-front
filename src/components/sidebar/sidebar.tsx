import { FC } from 'react';
import { useAppSelector } from '@store/store';

import { navItems } from './sidebar.constants';
import { SidebarStyles as Styled } from './sidebar.styles';
import { INavItems } from './sidebar.typings';
import { Icon } from '@components/icons';
import { ROUTES } from '@constants/routes';
import { storage } from '@services/storage';

export const SideBar: FC = () => {
  const user = useAppSelector((state) => state.user);
  const userRole = user.role as keyof INavItems;

  const logoutHandler = () => {
    storage.removeToken();
  };
  return (
    <Styled.Container>
      <Styled.Wrapper>
        <Icon type="logo" />
        <Styled.NavContainer>
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
        </Styled.NavContainer>
      </Styled.Wrapper>
      <Styled.NavElement
        onClick={logoutHandler}
        end={true}
        to={ROUTES.login}
        replace
      >
        <Icon type="logout" />
        <span>Logout</span>
      </Styled.NavElement>
    </Styled.Container>
  );
};
