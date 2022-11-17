import React from 'react';
import { gapi } from 'gapi-script';

import { ROUTES } from '@constants/routes';
import { ENV_VARIABLES } from '@constants/config';

import { Button } from '@components/button';

import {
  GoogleLogin,
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import { storage } from '@services/storage/storage';
import { trackPromise } from 'react-promise-tracker';
import { googleAuth } from '@services/auth.service';

export const GoogleButton = () => {
  const clientId = ENV_VARIABLES.GOOGLE_CLIENT_ID;
  const navigate = useNavigate();

  const initialize = () => {
    gapi.auth2.init({ clientId: clientId, scope: '' });
  };
  gapi.load('client:auth2', initialize);

  const handleSuccess = async (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => {
    const accessToken = (response as GoogleLoginResponse)?.accessToken;
    const { data } = await trackPromise(googleAuth({ token: accessToken }));

    if (accessToken) {
      storage.setIsAuth();
      navigate(ROUTES.dashboard);
    }
  };
  return (
    <GoogleLogin
      clientId={clientId || ''}
      onSuccess={handleSuccess}
      cookiePolicy={'single_host_origin'}
      render={(renderProps) => (
        <Button {...renderProps} title={'Login with Google'} minWidth={220} />
      )}
    />
  );
};
