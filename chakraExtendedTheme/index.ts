import { extendTheme } from '@chakra-ui/react';

import '@fontsource/poppins';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';

const colors = {
  light: {
    900: '#DADADA',
    500: '#F5F8FA',
    50: '#FFFFFF',
  },
  dark: {
    900: '#000000',
    700: '#47585B',
    500: '#999999',
  },
  highlight: {
    900: '#FFBA08',
  },
  background: {
    900: '# 1D1D1D',
  },
};

export const theme = extendTheme({
  colors,
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      'html, body': {
        fontSize: '62.5%',
        bg: 'light.500',
        color: 'dark.700',
      },
    },
  },
});
