import React, { useState } from 'react';
import { useDisclosure } from '@chakra-ui/react';
import CustomButton from '../CustomButton';
import Modal from '../Modal';
import Loader from '../Loader';
import { PoolInfo } from '../../types/pool';

type Props = {
  pool: PoolInfo;
  isDisabled: boolean;
  withdrawTokens: (poolInfo: PoolInfo) => Promise<boolean>;
};

const PoolStats = ({ pool, isDisabled, withdrawTokens }: Props) => {
  const {
    isOpen: isModalOpen,
    onOpen: openModal,
    onClose: closeModal,
  } = useDisclosure();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  if (!pool.details) {
    return null;
  }

  const handleWithdrawClick = async () => {
    if (!pool.details) {
      return;
    }
    if (!pool.details.accountMaturityDate) {
      setErrorMessage('You have not staked in this pool');
      openModal();
      return;
    }
    if (pool.details.accountMaturityDate.getTime() > Date.now()) {
      setErrorMessage('Maturity period is not over yet');
      openModal();
      return;
    }
    setIsLoading(true);
    await withdrawTokens(pool);
    setIsLoading(false);
  };

  return (
    <>
      {!isLoading ? (
        <CustomButton
          disabled={isDisabled}
          onClick={handleWithdrawClick}
          py={4}
        >
          Withdraw
        </CustomButton>
      ) : (
        <Loader text="Waiting for transaction" />
      )}
      <Modal isOpen={isModalOpen} onClose={closeModal} title="Error">
        {errorMessage}
      </Modal>
    </>
  );
};

export default PoolStats;
