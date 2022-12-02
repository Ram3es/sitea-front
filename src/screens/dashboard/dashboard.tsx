import { MainContainer } from '@components/container';

import { Loader } from '@components/loader';

import { UserInfoTable } from '@components/user-info-table';
import { PROMISES_AREA } from '@constants/promises-area';
import { ROLES } from '@constants/roles';
import { UsersTable } from '@screens/users-table';

import { useAppSelector } from '@store/store';

import { getTotalHours } from '@utils/get-total-hours';
import React, { useMemo } from 'react';

import { useDashboardState } from './dashboard.state';

import { DashboardStyles as Styled } from './dashboard.styles';

export const Dashboard = () => {
  const user = useAppSelector((state) => state.user);
  const { userWithResult } = useDashboardState(user.id);
  const results = userWithResult?.results;

  const totalHours = useMemo(
    () => getTotalHours(results as IResult[]),
    [results]
  );

  return (
    <MainContainer>
      {user.role === ROLES.admin ? (
        <UsersTable />
      ) : (
        <Loader area={PROMISES_AREA.getUserWithReasults}>
          <Styled.TotalStreight>{`Total straight: ${totalHours} hrs`}</Styled.TotalStreight>
          <UserInfoTable results={results} />
        </Loader>
      )}
    </MainContainer>
  );
};
