import { FC } from 'react';
import { useLocation } from 'react-router';

import { useAppSelector } from '@store/store';

import { HeaderStyles as Styled } from './header.styles';
import { ROUTE_TITLE } from './header.constants';

export const Header: FC = () => {
  const user = useAppSelector((state) => state.user);
  const { pathname } = useLocation();

  const walletNumber = user?.wallets[0]?.wallet;
  const nearNumber = user?.nearWallets[0]?.wallet;

  return (
    <Styled.Wrapper>
      <Styled.Title>{ROUTE_TITLE[pathname]}</Styled.Title>
      <Styled.UserInfoWrapper>
        <span>Welcome</span>
        <Styled.UserInfo>
          {user.email || walletNumber || nearNumber}
        </Styled.UserInfo>
      </Styled.UserInfoWrapper>
    </Styled.Wrapper>
  );
};
