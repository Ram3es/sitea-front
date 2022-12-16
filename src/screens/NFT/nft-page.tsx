import { MainContainer } from '@components/container';
import { Icon } from '@components/icons';

import React from 'react';
import styled from 'styled-components';

export const TemporaryStyles = {
  ImgWrapper: styled.div`
    margin-top: 80px;
    display: flex;
    justify-content: center;
  `,
};

export const NFTsPage = () => {
  return (
    <MainContainer>
      <TemporaryStyles.ImgWrapper>
        <Icon type="comingSoon" />
      </TemporaryStyles.ImgWrapper>
    </MainContainer>
  );
};
