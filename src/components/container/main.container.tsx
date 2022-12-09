import React, { FC } from 'react';
import { Header } from '@components/header';
import { SideBar } from '@components/sidebar';

import { CommonStyles as StyledCommon } from '@styles/common/common.styles';

interface IMainContainerProps {
  children: React.ReactNode;
}

export const MainContainer: FC<IMainContainerProps> = (props) => {
  const { children } = props;
  return (
    <>
      <StyledCommon.Container>
        <SideBar />
        <StyledCommon.Content>
          <Header />
          {children}
        </StyledCommon.Content>
      </StyledCommon.Container>
    </>
  );
};
