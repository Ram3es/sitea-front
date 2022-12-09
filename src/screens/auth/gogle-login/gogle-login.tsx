import { FC } from 'react';
import axios from 'axios';
import { gapi } from 'gapi-script';

import { ENV_VARIABLES } from '@constants/config';
import { Button } from '@components/button';

import {
  GoogleLogin,
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from 'react-google-login';
import { storage } from '@services/storage/storage';
import { trackPromise } from 'react-promise-tracker';
import { googleAuth } from '@services/auth.service';

import { errorMessage } from '@constants/pop-up';
import { useAppDispatch } from '@store/store';
import { loginUser } from '@store/reducers/user.slice';
import { PROMISES_AREA } from '@constants/promises-area';

interface IGoogleButtonProps {
  userId?: string;
  title?: string;
}

export const GoogleButton: FC<IGoogleButtonProps> = ({ userId, title }) => {
  const clientId = ENV_VARIABLES.GOOGLE_CLIENT_ID;
  const dispatch = useAppDispatch();

  const initialize = () => {
    gapi.auth2.init({ clientId: clientId, scope: '' });
  };
  gapi.load('client:auth2', initialize);

  const handleSuccess = async (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => {
    const accessToken = (response as GoogleLoginResponse)?.accessToken;
    if (!accessToken) {
      return errorMessage('Try again, or sign in another way').fire();
    }

    try {
      const { data } = await trackPromise(
        googleAuth({ token: accessToken, userId }),
        PROMISES_AREA.login
      );

      if (!userId) {
        storage.setToken(data.token);
      }

      dispatch(loginUser(data.user));
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return errorMessage(error?.response?.data.message).fire();
      }
    }
  };
  return (
    <GoogleLogin
      clientId={clientId || ''}
      onSuccess={handleSuccess}
      cookiePolicy={'single_host_origin'}
      render={(renderProps) => (
        <Button {...renderProps} title={title || 'GOOGLE'} minWidth={220} />
      )}
    />
  );
};
