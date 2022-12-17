import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  colors: {
    main: {
      200: '#ADD493',
      400: '#78BA43',
    },
  },
});
