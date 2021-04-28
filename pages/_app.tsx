import type { AppProps } from 'next/app';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Layout from '../components/Layout';

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

const theme = extendTheme({
  colors,
  styles: {
    global: {
      body: {
        bg: 'light.500',
        color: 'dark.700',
      },
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
