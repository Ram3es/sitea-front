import { FC } from 'react';
import { useAppSelector } from '@store/store';

import { navItems } from './sidebar.constants';
import { SidebarStyles as Styled } from './sidebar.styles';
import { INavItems } from './sidebar.typings';

export const SideBar: FC = () => {
  const user = useAppSelector((state) => state.user);
  const userRole = user.role as keyof INavItems;
  return (
    <Styled.Container>
      {navItems[userRole]?.map((item) => {
        return (
          <Styled.WrapNavElem key={item.title}>
            <Styled.NavElement end={true} to={item.route}>
              {item.title}
            </Styled.NavElement>
          </Styled.WrapNavElem>
        );
      })}
    </Styled.Container>
  );
};
