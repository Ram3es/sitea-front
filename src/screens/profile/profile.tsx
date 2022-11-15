import { FC } from 'react';

import { Button } from '@components/button';

import { ProfileStyles as Styled } from './profile.styles';

export const Profile: FC = () => {
  return (
    <Styled.Container>
      <Styled.RowWrapper>
        <Styled.Title>Email:</Styled.Title>
        <Styled.Title>dziugasg@gmail.com</Styled.Title>
      </Styled.RowWrapper>
      <Styled.RowWrapper>
        <Styled.Title>NEAR Wallet :</Styled.Title>
        <Button minWidth={190} title="Login with Near wallet" />
      </Styled.RowWrapper>
      <Styled.RowWrapper>
        <Styled.Title>Metamask:</Styled.Title>
        <Button minWidth={190} title="Login with Metamask" />
      </Styled.RowWrapper>
    </Styled.Container>
  );
};
