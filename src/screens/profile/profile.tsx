import { FC } from 'react';

import { Button } from '@components/button';

import { ProfileStyles as Styled } from './profile.styles';
import { useAppSelector } from '@store/store';
import { GoogleButton } from '@screens/auth/gogle-login';

import { useProfileState } from './profile.state';

export const Profile: FC = () => {
  const user = useAppSelector((state) => state.user);

  const { metamaskBtnHadler, nearBtnHandler } = useProfileState();

  const wallet = user?.wallets.map((wal) => wal.wallet).join('');
  const nearWallet = user?.nearWallets.map((wal) => wal.wallet).join('');

  return (
    <Styled.Container>
      <Styled.RowWrapper>
        <Styled.Title>Email:</Styled.Title>
        {user?.email ? (
          <Styled.Title>{user?.email}</Styled.Title>
        ) : (
          <GoogleButton userId={user?.id} />
        )}
      </Styled.RowWrapper>
      <Styled.RowWrapper>
        <Styled.Title>NEAR Wallet :</Styled.Title>
        {nearWallet ? (
          <Styled.Title>{nearWallet}</Styled.Title>
        ) : (
          <Button
            onClick={nearBtnHandler}
            minWidth={220}
            title="Login with Near wallet"
          />
        )}
      </Styled.RowWrapper>
      <Styled.RowWrapper>
        <Styled.Title>Metamask:</Styled.Title>
        {wallet ? (
          <Styled.Title>{wallet}</Styled.Title>
        ) : (
          <Button
            onClick={metamaskBtnHadler}
            minWidth={220}
            title="Login with Metamask"
          />
        )}
      </Styled.RowWrapper>
    </Styled.Container>
  );
};
