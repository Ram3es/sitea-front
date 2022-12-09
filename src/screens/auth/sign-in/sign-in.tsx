import { FC, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useAppSelector } from '@store/store';

import { Icon } from '@components/icons';
import { Loader } from '@components/loader';
import { ROUTES } from '@constants/routes';
import { PROMISES_AREA } from '@constants/promises-area';
import { storage } from '@services/storage/storage';

import { SignInStyles as Styled } from './sign-in.styles';
import { GoogleButton } from '../gogle-login/gogle-login';
import { MetamaskButton } from '../metamask-login/metamask-login';
import { NearLoginButton } from '../near-login/near';

export const SignIn: FC = () => {
  const user = useAppSelector((state) => state.user);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = storage.getToken();
    if (token) {
      return location.state
        ? navigate(location.state?.from, { replace: true })
        : navigate(ROUTES.main, { replace: true });
    }
  }, [location, user]);
  return (
    <Styled.Section>
      <Styled.Container>
        <Icon type="logo" />
        <Styled.h1>
          Welcome to <span> SitYEA</span>
        </Styled.h1>
        <Styled.Wrapper>
          <Styled.Label>Please login</Styled.Label>
          <Styled.ButtonWrapper>
            <GoogleButton />
            <NearLoginButton />
            <MetamaskButton />
            <Loader area={PROMISES_AREA.login} />
          </Styled.ButtonWrapper>
        </Styled.Wrapper>
      </Styled.Container>
      <Styled.ImageWrapper>
        <Icon type="girl" />
      </Styled.ImageWrapper>
    </Styled.Section>
  );
};
