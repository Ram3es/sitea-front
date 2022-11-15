import React, { FC, useEffect } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

import { ROUTES } from '@constants/routes';
import { storage } from '@services/storage/storage';

import { SignInStyles as Styled } from './sign-in.styles';

import { GoogleButton } from '../gogle-login/gogle-login';

import { MetamaskButton } from '../metamask-login/metamask-login';

import { NearButton } from '../near-login/near';

export const SignIn: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [searchParams] = useSearchParams();
  const accountId = searchParams.get('account_id');

  accountId && storage.setIsAuth();

  useEffect(() => {
    const token = storage.getToken();
    if (token || accountId) {
      return location.state
        ? navigate(location.state?.from, { replace: true })
        : navigate(ROUTES.main, { replace: true });
    }
  }, [location]);
  return (
    <Styled.Section>
      <Styled.Wrapper>
        <Styled.h1>Welcome to SitYEA</Styled.h1>
        <Styled.Label>Please login</Styled.Label>
        <Styled.ButtonWrapper>
          <GoogleButton />
          <NearButton />
          <MetamaskButton />
        </Styled.ButtonWrapper>
      </Styled.Wrapper>
    </Styled.Section>
  );
};
