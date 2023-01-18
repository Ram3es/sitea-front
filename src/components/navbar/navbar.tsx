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
          const LinkContent = (
            <>
              <Icon type={item.img} className={item.class} />
              <span>{item.title}</span>
            </>
          );
          const content = item.isLink ? (
            <Styled.Link href={item.route} target="_blank">
              {LinkContent}
            </Styled.Link>
          ) : (
            <Styled.NavElement end={true} to={item.route}>
              {LinkContent}
            </Styled.NavElement>
          );
          return (
            <Styled.WrapNavElem key={item.title}>{content}</Styled.WrapNavElem>
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
