import React, { ChangeEvent, useState, useEffect } from 'react';
import { Box, Input, Flex } from '@chakra-ui/react';
import { PoolInfo } from '../../types/pool';
import { useTokenBalance } from '../../hooks/useTokenBalance';
import CustomBox from '../CustomBox';
import LockButton from './LockButton';
import PeriodButton from './PeriodButton';
import PercentageButtons from './PercentageButtons';
import { useAppSelector } from '@store/store';

const MAX_STAKING_AMOUNT = 20000;

type Props = {
  pools: PoolInfo[];
  selectedPool?: PoolInfo;
  stakeTokens: (poolInfo: PoolInfo, amount: number) => Promise<boolean>;
  onStake: () => void;
  onPoolChange: (pool: PoolInfo) => void;
};

const StakingCard = ({
  pools,
  selectedPool,
  stakeTokens,
  onStake,
  onPoolChange,
}: Props) => {
  const user = useAppSelector((state) => state.user);
  const account = user.nearWallets[0].wallet;
  const [stakeAmount, setStakeAmount] = useState<number>(0);
  const [inputValue, setInputValue] = useState<string>('');
  const [invalidInput, setInvalidInput] = useState(false);
  const [inputExceedsMax, setInputExceedsMax] = useState(false);
  const [accountBalance, setAccountBalance] = useState<number | null>(null);

  const { balance } = useTokenBalance({ account, networkId: 'testnet' });

  useEffect(() => {
    (async () => {
      if (!account) {
        return;
      }
      const accBalance = parseFloat(balance);
      setAccountBalance(accBalance);
    })();
  }, [account, balance]);

  useEffect(() => {
    if (
      !selectedPool?.details ||
      inputValue === '' ||
      selectedPool.details.accountStaked === null
    ) {
      setStakeAmount(0);
      return;
    }

    const amount = parseFloat(inputValue);

    if (Number.isNaN(amount) || amount < 0) {
      setInvalidInput(true);
      setStakeAmount(0);
      return;
    }

    const stakedAmount = parseFloat(selectedPool.details.accountStaked);

    if (
      amount + stakedAmount > MAX_STAKING_AMOUNT ||
      (accountBalance && amount > accountBalance)
    ) {
      setInputExceedsMax(true);
      setStakeAmount(0);
      return;
    }

    setInvalidInput(false);
    setInputExceedsMax(false);
    setStakeAmount(amount);
    // eslint-disable-next-line
  }, [inputValue]);

  if (!selectedPool) {
    return null;
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handlePeriodButtonClick = (pool: PoolInfo) => {
    setInputValue('0');
    onPoolChange(pool);
  };

  return (
    <CustomBox bg="main.200" my={10} px={12} py={8}>
      <Box mb={6}>
        <Flex alignItems="center" mb={4}>
          <Box flex={1} fontWeight="bold" fontSize="xl">
            Stake tokens
          </Box>
          {accountBalance !== null && selectedPool.details && (
            <Box flex={1} textAlign="right">
              <Box fontWeight="bold">Available tokens:</Box>
              <Box>
                {accountBalance.toFixed(2)} {selectedPool.details.token.symbol}
              </Box>
            </Box>
          )}
        </Flex>

        <Flex alignItems="center">
          <Box flex={1}>Stake amount</Box>
          <Box flex={2}>
            <Input
              type="number"
              min={0}
              py={8}
              px={8}
              placeholder="Min: 0"
              borderColor="black"
              borderRadius="3xl"
              bg="white"
              size="lg"
              value={inputValue}
              onChange={handleInputChange}
            />
            <Box mt={1} textColor="red.600">
              {invalidInput && 'Amount is invalid'}
              {inputExceedsMax && 'Amount exceeds balance or token limit'}
            </Box>
          </Box>
        </Flex>
        <PercentageButtons
          values={[25, 50, 75, 100]}
          onClick={(value) =>
            accountBalance !== null &&
            setInputValue(`${((accountBalance * value) / 100).toFixed(2)}`)
          }
        />
      </Box>
      <Box>
        <Box my={4} flex={1}>
          Stake period
        </Box>
        {pools.map((pool) => (
          <PeriodButton
            key={pool.address}
            pool={pool}
            isSelected={selectedPool.address === pool.address}
            display={!pool.active ? 'none' : 'block'}
            onClick={() => {
              handlePeriodButtonClick(pool);
            }}
          />
        ))}
      </Box>
      <Box mt={10}>
        <LockButton
          pool={selectedPool}
          amount={stakeAmount}
          stakeTokens={stakeTokens}
          onStake={onStake}
        />
      </Box>
    </CustomBox>
  );
};

export default StakingCard;
