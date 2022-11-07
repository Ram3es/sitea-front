import React, { FC } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { ROUTES } from '@constants/routes';

import { Main } from '@screens/main';
import { Profile } from '@screens/profile';
import { SignIn } from '@screens/auth/sign-in';
import { Dashboard } from '@screens/dashboard';

import { PrivateRoutes } from './private-routes';
import { UsersTable } from '@screens/users-table';
import { Stacking } from '@screens/stacking/stacking';

export const App: FC = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path={ROUTES.main} element={<Main />}>
              <Route path={ROUTES.dashboard} element={<Dashboard />} />
              <Route path={ROUTES.profile} element={<Profile />} />
              <Route path={ROUTES.stacking} element={<Stacking />} />
              <Route path={ROUTES.admin} element={<UsersTable />} />
            </Route>
          </Route>
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
