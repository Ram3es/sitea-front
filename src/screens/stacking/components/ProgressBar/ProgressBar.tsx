import React from 'react'
import { Box, Flex } from '@chakra-ui/react'

type Props = {
  value: number
}

const ProgressBar = ({ value }: Props) => {
  return (
    <Flex h="10px" border="1px dotted rgba(0,0,0,0.3)" borderRadius="xl" position="relative">
      <Box w={`${value}%`} bg="black" h="6px" mx="1px" mt="1px" borderRadius="xl" />
    </Flex>
  )
}

export default ProgressBar
