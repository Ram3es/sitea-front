import React, { ReactNode } from 'react';
import { Box, Flex, BoxProps } from '@chakra-ui/react';

interface Props extends BoxProps {
  children: ReactNode;
  color?: string;
  disabled?: boolean;
  onClick: () => void;
}

const CustomButton = ({
  children,
  color = 'black',
  disabled,
  onClick,
  ...rest
}: Props) => {
  return (
    <Box
      onClick={onClick}
      bg={color}
      textAlign="center"
      fontWeight="bold"
      borderRadius={36}
      opacity={disabled ? 0.5 : undefined}
      color="white"
      cursor="pointer"
      {...rest}
    >
      <Flex justifyContent="center">{children}</Flex>
    </Box>
  );
};

export default CustomButton;
