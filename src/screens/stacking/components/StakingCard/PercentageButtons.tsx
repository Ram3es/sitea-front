import React from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import CustomButton from '../CustomButton';

type Props = {
  values: number[];
  onClick: (percentage: number) => void;
};

const PercentageButtons = ({ onClick, values }: Props) => {
  return (
    <SimpleGrid columns={[2, null, 4]} gap={4} mt={6}>
      {values.map((value) => (
        <CustomButton key={value} onClick={() => onClick(value)} py={4}>
          {value}%
        </CustomButton>
      ))}
    </SimpleGrid>
  );
};

export default PercentageButtons;
