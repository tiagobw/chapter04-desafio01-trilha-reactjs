import type { AppProps } from 'next/app';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import Layout from '../components/Layout';
import { theme } from '../chakraExtendedTheme';

// import 'swiper/swiper.scss';
import 'swiper/swiper-bundle.css';

import '../styles/globals.css';

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
