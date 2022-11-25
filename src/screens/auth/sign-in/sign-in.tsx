import { FC, useCallback, useEffect } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '@store/store';
import { ROUTES } from '@constants/routes';
import { storage } from '@services/storage/storage';

import { SignInStyles as Styled } from './sign-in.styles';

import { GoogleButton } from '../gogle-login/gogle-login';
import { MetamaskButton } from '../metamask-login/metamask-login';
import { NearLoginButton } from '../near-login/near';
import { trackPromise } from 'react-promise-tracker';
import { nearLogin } from '@services/auth.service';
import { loginUser } from '@store/reducers/user.slice';

export const SignIn: FC = () => {
  const user = useAppSelector((state) => state.user);

  const navigate = useNavigate();
  const location = useLocation();

  const test = localStorage.getItem('near_wallet_auth_key');
  console.log(test, 'test');

  // const [searchParams] = useSearchParams();
  // const wallet = searchParams.get('account_id') as string;

  // const nearWithLogin = useCallback(async () => {
  //   try {
  //     const { data } = await trackPromise(nearLogin({ wallet }));

  //     storage.setToken(data.token);
  //     dispatch(loginUser(data.user));
  //   } catch (error) {}
  // }, []);

  // useEffect(() => {
  //   wallet && nearWithLogin();
  // }, [wallet]);

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
      <Styled.Wrapper>
        <Styled.h1>Welcome to SitYEA</Styled.h1>
        <Styled.Label>Please login</Styled.Label>
        <Styled.ButtonWrapper>
          <GoogleButton />
          <NearLoginButton />
          <MetamaskButton />
        </Styled.ButtonWrapper>
      </Styled.Wrapper>
    </Styled.Section>
  );
};
