import { FC } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import { ROUTES } from '@constants/routes';
import { Profile } from '@screens/profile';
import { UserInfo } from '@screens/user-info-page';
import { SignIn } from '@screens/auth/sign-in';
import { Dashboard } from '@screens/dashboard';
import { Stacking } from '@screens/stacking/stacking';

import { NearSuccessPage } from '@screens/auth/near-login/near-success-page';
import { PrivateRoutes } from './private-routes';

import { NearFailurePage } from '@screens/auth/near-login/near-failure-page';
import { PrivateAdmin } from './admin-private-route';

import { PrivateUser } from './user-private-route';

export const App: FC = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path={ROUTES.main} element={<Dashboard />} />
            <Route element={<PrivateUser />}>
              <Route path={ROUTES.profile} element={<Profile />} />
              <Route path={ROUTES.stacking} element={<Stacking />} />
            </Route>
            <Route element={<PrivateAdmin />}>
              <Route path={ROUTES.user} element={<UserInfo />} />
            </Route>
          </Route>

          <Route path={ROUTES.nearSuccessPage} element={<NearSuccessPage />} />
          <Route path={ROUTES.nearFailurePage} element={<NearFailurePage />} />
          <Route path={ROUTES.login} element={<SignIn />} />
          <Route
            path={ROUTES.noMatch}
            element={<Navigate to={ROUTES.main} />}
          />
        </Routes>
      </Router>
    </>
  );
};
