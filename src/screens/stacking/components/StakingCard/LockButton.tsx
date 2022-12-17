import React, { useState } from 'react';
import { useDisclosure, Box, Center } from '@chakra-ui/react';
import CustomButton from '../CustomButton';
import Modal from '../Modal';
import Loader from '../Loader';
import { PoolInfo } from '../../types/pool';
import { useAppSelector } from '@store/store';

type Props = {
  pool: PoolInfo;
  amount: number;
  stakeTokens: (poolInfo: PoolInfo, amount: number) => Promise<boolean>;
  onStake: () => void;
};

const LockButton = ({ pool, amount, stakeTokens, onStake }: Props) => {
  const user = useAppSelector((state) => state.user);
  const account = user.nearWallets[0].wallet;
  const {
    isOpen: isModalOpen,
    onOpen: openModal,
    onClose: closeModal,
  } = useDisclosure();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  if (!pool.details) {
    return null;
  }

  const handleLockClick = async () => {
    if (!account || !pool.details) {
      return;
    }
    if (amount === 0) {
      setErrorMessage('Please select a valid amount to lock');
      openModal();
      return;
    }
    if (!pool.details.isOpen) {
      setErrorMessage('Pool is closed');
      openModal();
      return;
    }
    setErrorMessage(null);
    openModal();
  };

  const handleStakeClick = async () => {
    if (!account || !pool.details) {
      return;
    }
    setIsLoading(true);
    const result = await stakeTokens(pool, amount);
    setIsLoading(false);
    if (result) {
      closeModal();
      onStake();
    } else {
      setErrorMessage('Failed to Stake');
    }
  };

  return (
    <>
      <CustomButton
        disabled={!pool.details.isOpen}
        onClick={handleLockClick}
        py={4}
      >
        Stake
      </CustomButton>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={errorMessage ? 'Error' : 'Stake tokens'}
      >
        {errorMessage ?? (
          <Box>
            <Box mb={2}>AMOUNT</Box>
            <Box fontSize="xl" fontWeight="bold">
              {amount} {pool.details.token.symbol}
            </Box>
            <Box pt={6}>
              {isLoading && (
                <Center mt={2}>
                  <Loader text="Waiting for transaction, it might take a while" />
                </Center>
              )}
              {!isLoading && (
                <CustomButton onClick={handleStakeClick} py={4}>
                  STAKE
                </CustomButton>
              )}
            </Box>
          </Box>
        )}
      </Modal>
    </>
  );
};

export default LockButton;
