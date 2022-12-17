import React from 'react'
import { Spinner, Box } from '@chakra-ui/react'

type Props = {
  text?: string
}

const Loader = ({ text }: Props) => {
  return (
    <Box textAlign="center">
      <Spinner size="xl" />
      <Box fontSize="lg" mt={4}>
        {text}
      </Box>
    </Box>
  )
}

export default Loader
