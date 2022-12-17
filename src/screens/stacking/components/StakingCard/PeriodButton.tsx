import React from 'react';
import { Box, Flex, Text, Center, Circle } from '@chakra-ui/react';
import { PoolInfo } from '../../types/pool';
import ProgressBar from '../ProgressBar';

type Props = {
  pool: PoolInfo;
  isSelected: boolean;
  display: string;
  onClick: () => void;
};

const PeriodButton = ({ pool, isSelected, onClick, display }: Props) => {
  const stakedPercentage = pool.details
    ? (parseFloat(pool.details.stakedTotal) /
        parseFloat(pool.details.poolSize)) *
      100
    : null;

  return (
    <Box
      onClick={onClick}
      display={display}
      borderRadius="3xl"
      cursor="pointer"
      border={isSelected ? '1px solid black' : '1px solid rgb(0,0,0,0.3)'}
      mt="-1px"
      my={2}
      py={4}
      px={5}
    >
      <Flex>
        <Box flex={1} fontWeight="bold">
          <Flex>
            <Center mr={4}>
              <Circle
                size="24px"
                border={
                  isSelected ? '2px solid black' : '2px solid rgb(0,0,0,0.3)'
                }
              />
              {isSelected && (
                <Circle size="14px" bg="black" position="absolute" />
              )}
            </Center>
            <Box flex={1}>APY {pool.apy}%</Box>
          </Flex>
        </Box>
        <Center flex={1}>{pool.months} months</Center>
        <Box flex={1} textAlign="right">
          {stakedPercentage !== null && (
            <Text>{stakedPercentage.toFixed(2)}% staked</Text>
          )}
        </Box>
      </Flex>
      {stakedPercentage !== null && (
        <Box mt={4} mb={1}>
          <ProgressBar value={stakedPercentage} />
        </Box>
      )}
    </Box>
  );
};

export default PeriodButton;
