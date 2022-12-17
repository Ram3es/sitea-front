import React, { ReactNode } from 'react'
import { Box, BoxProps } from '@chakra-ui/react'

interface Props extends BoxProps {
  children: ReactNode
  color?: string
}

const CustomBox = ({ children, ...rest }: Props) => {
  return (
    <Box border="1px solid black" borderRadius="3xl" {...rest}>
      {children}
    </Box>
  )
}

export default CustomBox
