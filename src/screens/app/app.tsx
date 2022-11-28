import { FC } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import { ROUTES } from '@constants/routes';

import { Main } from '@screens/main';
import { Profile } from '@screens/profile';
import { UserInfo } from '@screens/user-info-page';
import { SignIn } from '@screens/auth/sign-in';
import { Dashboard } from '@screens/dashboard';
import { UsersTable } from '@screens/users-table';
import { Stacking } from '@screens/stacking/stacking';

import { PrivateRoutes } from './private-routes';
import { NearSuccessPage } from '@screens/auth/near-login/near-success-page';
import { PrivateAdmin } from './admin-private-route';
import { PrivateUser } from './user-private-route';

export const App: FC = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path={ROUTES.main} element={<Main />}>
              <Route element={<PrivateUser />}>
                <Route path={ROUTES.dashboard} element={<Dashboard />} />
                <Route path={ROUTES.profile} element={<Profile />} />
                <Route path={ROUTES.stacking} element={<Stacking />} />
              </Route>
              <Route element={<PrivateAdmin />}>
                <Route path={ROUTES.admin} element={<UsersTable />} />
                <Route path={ROUTES.user} element={<UserInfo />} />
              </Route>
            </Route>
          </Route>
          <Route path={ROUTES.nearSuccessPage} element={<NearSuccessPage />} />
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
