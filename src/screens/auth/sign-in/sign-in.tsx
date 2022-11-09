import React, { FC, useEffect } from 'react';

import { Button } from '@components/button';

import { SignInStyles as Styled } from './sign-in.styles';
import { useNearLogin } from '../near-login/near';
import { GoogleButton } from '../gogle-login/gogle-login';
import { storage } from '@services/storage/storage';
import { useLocation, useNavigate } from 'react-router';
import { ROUTES } from '@constants/routes';

export const SignIn: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = storage.getToken();
    if (token) {
      return location.state
        ? navigate(location.state?.from, { replace: true })
        : navigate(ROUTES.main, { replace: true });
    }
  }, []);
  return (
    <Styled.Section>
      <Styled.Wrapper>
        <Styled.h1>Welcome to SitYEA</Styled.h1>
        <Styled.Label>Please login</Styled.Label>
        <Styled.ButtonWrapper>
          <GoogleButton />
          <Button
            title="Login with NEAR wallet"
            onClick={useNearLogin}
            minWidth={220}
          />
          <Button title="Login with Metamask" minWidth={220} />
        </Styled.ButtonWrapper>
      </Styled.Wrapper>
    </Styled.Section>
  );
};
