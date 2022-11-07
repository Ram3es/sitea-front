import React, { FC } from 'react';

import { Button } from '@components/button';

import { SignInStyles as Styled } from './sign-in.styles';
import { useNearLogin } from '../near-login/near';

export const SignIn: FC = () => {
  return (
    <Styled.Section>
      <Styled.Wrapper>
        <Styled.h1>Welcome to SitYEA</Styled.h1>
        <Styled.Label>Please login</Styled.Label>
        <Styled.ButtonWrapper>
          <Button title="Login with Google" minWidth={220} />
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
