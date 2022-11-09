import React, { FC } from 'react';
import { useNavigate } from 'react-router';

import { ROUTES } from '@constants/routes';
import { Button } from '@components/button';
import { storage } from '@services/storage/storage';

import { HeaderStyles as Styled } from './header.styles';

export const Header: FC = () => {
  const navigate = useNavigate();

  const logoutHandler = () => {
    storage.removeToken();
    navigate(ROUTES.login, { replace: true });
  };
  return (
    <Styled.Wrapper>
      <Button title="Logout" onClick={logoutHandler} />
      <Styled.UserEmail>test@mail.com</Styled.UserEmail>
    </Styled.Wrapper>
  );
};
