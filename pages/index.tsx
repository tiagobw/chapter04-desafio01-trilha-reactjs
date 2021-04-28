import { Box, Heading } from '@chakra-ui/layout';
import Head from 'next/head';
import BannerOne from '../components/BannerOne';
import ContinentsSlide from '../components/ContinentsSlide';
import { TravelTypes } from '../components/TravelTypes';

export default function Home() {
  return (
    <>
      <Head>
        <title>World Trip</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <BannerOne />
        <TravelTypes />
        <Box
          w={['60px', '90px']}
          h="0px"
          border={['1px solid #47585B', '2px solid #47585B']}
          margin={["3.6rem auto", "8.5rem auto"]}
        />
        <Heading
          as="h2"
          textAlign="center"
          fontWeight="500"
          fontSize={['2.0rem', '3.6rem']}
          lineHeight={['3.0rem', '5.4rem']}
        >
          Vamos nessa?
          <br />
          Então escolha seu continente
        </Heading>
        <ContinentsSlide />
      </main>
    </>
  );
}
