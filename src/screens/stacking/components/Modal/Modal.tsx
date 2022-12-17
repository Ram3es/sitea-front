import React, { ReactNode } from 'react';
import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  ModalHeader,
  ModalFooter,
} from '@chakra-ui/react';
import CustomButton from '../CustomButton';

type Props = {
  children: ReactNode;
  isOpen: boolean;
  title: string;
  onClose: () => void;
};

const Modal = ({ isOpen, onClose, title, children }: Props) => {
  return (
    <ChakraModal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent
        borderRadius="2rem"
        border="1px solid rgb(255,255,255,0.3)"
        p={6}
      >
        <ModalHeader fontSize="2xl">{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>
        <ModalFooter justifyContent="center" mt={4}>
          <CustomButton onClick={onClose} py={4} px={12}>
            Close
          </CustomButton>
        </ModalFooter>
      </ModalContent>
    </ChakraModal>
  );
};

export default Modal;
