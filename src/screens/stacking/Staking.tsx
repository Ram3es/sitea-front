import React, { useState } from 'react';
import {
  Container,
  Box,
  Heading,
  SimpleGrid,
  Center,
  ChakraProvider,
} from '@chakra-ui/react';
import StakingCard from './components/StakingCard';
import BalanceCard from './components/BalanceCard';
import ErrorMessage from './components/ErrorMessage';
import { PoolInfo } from './types/pool';
import { pools as poolsInfo } from './data/pools';
import { usePools } from './hooks/usePools';
import Loader from './components/Loader';
import { theme } from './styles/theme';
import { useAppSelector } from '@store/store';
import { MainContainer } from '@components/container';

export const Staking = () => {
  const user = useAppSelector((state) => state.user);
  const [selectedPoolAddress, setSelectedPoolAddress] = useState(
    poolsInfo[0].address
  );

  const { pools, reload, stakeTokens, withdrawTokens, isLoading } = usePools({
    poolsInfo,
    account: user?.nearWallets[0].wallet,
    networkId: 'testnet',
  });

  const handlePoolChange = (pool: PoolInfo) => {
    setSelectedPoolAddress(pool.address);
  };

  return (
    <MainContainer>
      <ChakraProvider theme={theme}>
        <Box>
          <Container maxW="1300px" mt={16} px={4}>
            {isLoading && (
              <Box py={32}>
                <Loader text="Loading" />
              </Box>
            )}
            {!isLoading && pools && (
              <SimpleGrid columns={[1, null, 2]} gap={6}>
                <StakingCard
                  pools={pools}
                  selectedPool={pools.find(
                    (pool) => pool.address === selectedPoolAddress
                  )}
                  stakeTokens={stakeTokens}
                  onPoolChange={handlePoolChange}
                  onStake={reload}
                />
                <BalanceCard
                  pool={pools.find(
                    (pool) => pool.address === selectedPoolAddress
                  )}
                  withdrawTokens={withdrawTokens}
                />
              </SimpleGrid>
            )}
            {!isLoading && !pools && (
              <Center py={36} fontSize="xl">
                <ErrorMessage message="Something went wrong. Please try again later." />
              </Center>
            )}
          </Container>
        </Box>
      </ChakraProvider>
    </MainContainer>
  );
};
