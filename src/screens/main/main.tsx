import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '@components/header';
import { SideBar } from '@components/sidebar';

import { MainStyles as Styled } from './main.styles';

export const Main: FC = () => {
  return (
    <>
      <Header />
      <Styled.Container>
        <SideBar />
        <Styled.Content>
          <Outlet />
        </Styled.Content>
      </Styled.Container>
    </>
  );
};
