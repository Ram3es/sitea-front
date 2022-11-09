import { UserInfoTable } from '@components/mui-table/user-info-table';
import React from 'react';

import { DashboardStyles as Styled } from './dashboard.styles';

export const Dashboard = () => {
  return (
    <>
      <Styled.TotalStreight>{`Total straight: ${200} hrs`}</Styled.TotalStreight>
      <UserInfoTable />
    </>
  );
};
