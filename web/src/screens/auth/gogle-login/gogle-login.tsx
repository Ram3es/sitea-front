import React from 'react';
import { gapi } from 'gapi-script';

import { ROUTES } from '@constants/routes';
import { Button } from '@components/button';
import { storage } from '@services/storage/storage';

import {
  GoogleLogin,
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from 'react-google-login';
import { useNavigate } from 'react-router-dom';

export const GoogleButton = () => {
  const clientId = process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID;
  const navigate = useNavigate();

  const initialize = () => {
    gapi.auth2.init({ clientId: clientId, scope: '' });
  };
  gapi.load('client:auth2', initialize);

  const handleSuccess = async (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => {
    const accessToken = (response as GoogleLoginResponse)?.accessToken;
    if (accessToken) {
      storage.setToken('true', false);
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
