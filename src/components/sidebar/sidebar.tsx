import { FC } from 'react';

import { Icon } from '@components/icons';
import { NavBar } from '@components/navbar';
import { BurgerMenu } from '@components/burger-menu';

import { SidebarStyles as Styled } from './sidebar.styles';

export const SideBar: FC = () => {
  return (
    <>
      <Styled.Container>
        <Icon type="logo" />
        <BurgerMenu />
        <Styled.Wrapper>
          <Styled.NavContainer>
            <NavBar />
          </Styled.NavContainer>
        </Styled.Wrapper>
      </Styled.Container>
    </>
  );
};
