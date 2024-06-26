import { FC } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { MainContainer } from '@components/container';
import { UserInfoTable } from '@components/user-info-table';

import { useDashboardState } from '@screens/dashboard/dashboard.state';
import { UserInfoStyles as Styled } from './user-info.styles';

export const UserInfo: FC = () => {
  const { userId } = useParams();
  const navigate = useNavigate();

  const { userWithResult } = useDashboardState(userId as string);

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <>
      <MainContainer>
        <Styled.Wrapper>
          <Styled.BtnBack onClick={handleGoBack}>Back</Styled.BtnBack>
          <Styled.Title>{`User: ${
            userWithResult?.email ||
            userWithResult?.wallets[0]?.wallet ||
            userWithResult?.nearWallets[0]?.wallet
          }`}</Styled.Title>
        </Styled.Wrapper>
        <UserInfoTable results={userWithResult?.results} />
      </MainContainer>
    </>
  );
};
