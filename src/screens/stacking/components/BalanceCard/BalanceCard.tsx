import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import ErrorMessage from '../ErrorMessage';
import CustomBox from '../CustomBox';
import { PoolInfo } from '../../types/pool';
import PoolStats from './PoolStats';
import WithdrawButton from './WithdrawButton';

type Props = {
  pool?: PoolInfo;
  withdrawTokens: (poolInfo: PoolInfo) => Promise<boolean>;
};

const BalanceCard = ({ pool, withdrawTokens }: Props) => {
  if (!pool?.details) {
    return null;
  }

  return (
    <CustomBox my={10} px={12} py={8}>
      <Box fontWeight="bold" fontSize="xl" mb={6}>
        Your balance
      </Box>
      <Box border="1px solid black" borderRadius="3xl" px={5} py={5}>
        {pool.details.accountStaked !== null ? (
          <Flex alignItems="center">
            <Box flex={1}>You have staked</Box>
            <Flex
              flex={1}
              textAlign="right"
              alignItems="baseline"
              justifyContent="right"
            >
              <Box fontSize="2xl" fontWeight="bold" mr={2}>
                {parseFloat(pool.details.accountStaked).toFixed(2)}
              </Box>
              <Box>{pool.details.token.symbol}</Box>
            </Flex>
          </Flex>
        ) : (
          <Box fontSize="lg" fontWeight="bold">
            <ErrorMessage message="Please connect to wallet" />
          </Box>
        )}
      </Box>
      <PoolStats pool={pool} />
      <Box mt={16}>
        {pool.details.accountStaked !== null ? (
          <WithdrawButton
            isDisabled={
              !pool.details.accountStaked ||
              pool.details.accountStaked === '0' ||
              !pool.details.isOpen
            }
            pool={pool}
            withdrawTokens={withdrawTokens}
          />
        ) : (
          <Box mt={10} fontWeight="bold" textAlign="center">
            <ErrorMessage message="Please connect to wallet to lock and withdraw tokens" />
          </Box>
        )}
      </Box>
    </CustomBox>
  );
};

export default BalanceCard;
