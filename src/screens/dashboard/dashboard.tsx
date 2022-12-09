import { useMemo } from 'react';

import { ROLES } from '@constants/roles';
import { PROMISES_AREA } from '@constants/promises-area';

import { Loader } from '@components/loader';
import { ChartBar } from '@components/chartbar';
import { MainContainer } from '@components/container';
import { UserInfoTable } from '@components/user-info-table';

import { useAppSelector } from '@store/store';
import { UsersTable } from '@screens/users-table';
import { getTotalHours } from '@utils/get-total-hours';

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
        <Styled.Wrapper>
          <Loader area={PROMISES_AREA.getUserWithReasults}>
            <Styled.ChartWrapper>
              <ChartBar results={results} />
            </Styled.ChartWrapper>
            <Styled.TotalStreight>
              Total straight: <span>{`${totalHours} hrs`}</span>
            </Styled.TotalStreight>
            <UserInfoTable results={results} />
          </Loader>
        </Styled.Wrapper>
      )}
    </MainContainer>
  );
};
