import { FC } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { UserInfoTable } from '@components/mui-table/user-info-table';

import { UserInfoStyles as Styled } from './user-info.styles';

export const UserInfo: FC = () => {
  const { userId } = useParams();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <>
      <Styled.Wrapper>
        <Styled.BtnBack onClick={handleGoBack}>Back</Styled.BtnBack>
        <Styled.Title>{`User ID: ${userId}`}</Styled.Title>
      </Styled.Wrapper>
      <UserInfoTable />
    </>
  );
};
