import React from 'react'
import { Center } from '@chakra-ui/react'

type Props = {
  message: string
}

const ErrorMessage = ({ message }: Props) => {
  return <Center>{message}</Center>
}

export default ErrorMessage
