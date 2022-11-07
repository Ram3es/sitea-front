import React, { FC } from 'react';

import { Button } from '@components/button';
import { HeaderStyles as Styled } from './header.styles';

export const Header: FC = () => {
  return (
    <Styled.Wrapper>
      <Button title="Logout" />
      <Styled.UserEmail>test@mail.com</Styled.UserEmail>
    </Styled.Wrapper>
  );
};
