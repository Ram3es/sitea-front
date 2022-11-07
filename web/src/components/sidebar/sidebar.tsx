import { FC } from 'react';

import { navItems } from './sidebar.constants';
import { SidebarStyles as Styled } from './sidebar.styles';

export const SideBar: FC = () => {
  return (
    <Styled.Container>
      {navItems.user.map((item) => {
        return (
          <Styled.WrapNavElem key={item.title}>
            <Styled.NavElement to={item.route}>{item.title}</Styled.NavElement>
          </Styled.WrapNavElem>
        );
      })}
    </Styled.Container>
  );
};
