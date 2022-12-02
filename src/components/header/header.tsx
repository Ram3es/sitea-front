import React, { FC } from 'react';
import { useNavigate } from 'react-router';

import { ROUTES } from '@constants/routes';
import { Button } from '@components/button';
import { storage } from '@services/storage/storage';
import { useAppSelector } from '@store/store';

import { HeaderStyles as Styled } from './header.styles';

export const Header: FC = () => {
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.user);

  const logoutHandler = () => {
    storage.removeToken();
    navigate(ROUTES.login, { replace: true });
  };

  const walletNumber = user?.wallets[0]?.wallet;
  const nearNumber = user?.nearWallets[0]?.wallet;

  return (
    <Styled.Wrapper>
      <Button title="Logout" onClick={logoutHandler} />
      <Styled.UserEmail>
        {user.email || walletNumber || nearNumber}
      </Styled.UserEmail>
    </Styled.Wrapper>
  );
};
