import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { PoolInfo } from '../../types/pool';

type Props = {
  pool: PoolInfo;
};

const PoolStats = ({ pool }: Props) => {
  if (!pool.details) {
    return null;
  }

  const poolProperties = [
    {
      label: 'APR',
      value: `${pool.details.apy}%`,
    },
    {
      label: 'Total Liquidity',
      value: `${parseFloat(pool.details.stakedTotal).toFixed(2)} ${
        pool.details.token.symbol
      }`,
    },
    {
      label: 'Network',
      value: 'Near Testnet',
    },
    {
      label: 'Launch date',
      value:
        pool.details.launchDate.getTime() > Date.now()
          ? pool.details.launchDate.toUTCString()
          : null,
    },
    {
      label: 'Closing date',
      value: pool.details.closingDate.toUTCString(),
    },
    {
      label: 'Status',
      value: pool.details.isOpen ? 'Open' : 'Closed',
    },
    {
      label: 'Maturity',
      value: pool.details.accountMaturityDate?.toUTCString() ?? '-',
    },
  ];

  return (
    <Box mt={16} mb={8}>
      {poolProperties.map(
        (property) =>
          property.value && (
            <Box key={property.label}>
              <Flex py={4}>
                <Box flex={1} fontWeight="bold">
                  {property.label}
                </Box>
                <Box flex={2} textAlign="right">
                  {property.value}
                </Box>
              </Flex>
            </Box>
          )
      )}
    </Box>
  );
};

export default PoolStats;
