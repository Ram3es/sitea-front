import { FC } from 'react';

import { Button } from '@components/button';
import { Loader } from '@components/loader';
import { MainContainer } from '@components/container';
import { PROMISES_AREA } from '@constants/promises-area';

import { useAppSelector } from '@store/store';
import { GoogleButton } from '@screens/auth/gogle-login';

import { useProfileState } from './profile.state';
import { ProfileStyles as Styled } from './profile.styles';

export const Profile: FC = () => {
  const user = useAppSelector((state) => state.user);

  const { metamaskBtnHadler, nearBtnHandler } = useProfileState();

  const wallet = user?.wallets.map((wal) => wal.wallet).join('');
  const nearWallet = user?.nearWallets.map((wal) => wal.wallet).join('');

  return (
    <MainContainer>
      <Styled.Container>
        <Styled.RowWrapper>
          <Styled.Title>Email:</Styled.Title>
          {user?.email ? (
            <Styled.Row>{user?.email}</Styled.Row>
          ) : (
            <Styled.BtnWrapper>
              <GoogleButton title="LOGIN WITH GOOGLE" userId={user?.id} />
            </Styled.BtnWrapper>
          )}
        </Styled.RowWrapper>
        <Styled.RowWrapper>
          <Styled.Title>Near Wallet :</Styled.Title>
          {nearWallet ? (
            <Styled.Row>{nearWallet}</Styled.Row>
          ) : (
            <Styled.BtnWrapper>
              <Loader width="30" area={PROMISES_AREA.addNearWallet}>
                <Button
                  onClick={nearBtnHandler}
                  minWidth={220}
                  title="LOGIN WITH NEAR WALLET"
                />
              </Loader>
            </Styled.BtnWrapper>
          )}
        </Styled.RowWrapper>
        <Styled.RowWrapper>
          <Styled.Title>Metamask:</Styled.Title>
          {wallet ? (
            <Styled.Row>{wallet}</Styled.Row>
          ) : (
            <Styled.BtnWrapper>
              <Loader width="30" area={PROMISES_AREA.addMetamask}>
                <Button
                  onClick={metamaskBtnHadler}
                  minWidth={220}
                  title="LOGIN WITH METAMASK"
                />
              </Loader>
            </Styled.BtnWrapper>
          )}
        </Styled.RowWrapper>
      </Styled.Container>
    </MainContainer>
  );
};
