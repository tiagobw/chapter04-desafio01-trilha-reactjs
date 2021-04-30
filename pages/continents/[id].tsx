import Head from 'next/head';
import { Image } from '@chakra-ui/image';
import { Box, Flex, Grid, Heading, Text } from '@chakra-ui/layout';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from '@chakra-ui/react';
import { GetStaticProps, GetStaticPaths } from 'next';

import BannerTwo from '../../components/BannerTwo';
import Card from '../../components/Card';
import NumberAndText from '../../components/smallChakra/NumberAndText';

import { server } from '../../config';

import { Continent, continents } from '../../data';

interface ContinentPageProps {
  continent: Continent;
}

export default function ContinentPage({ continent }: ContinentPageProps) {
  return (
    <>
      <Head>
        <title>{continent.name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BannerTwo bannerImage={continent.bannerImage} name={continent.name} />
      <Grid
        as="section"
        w={['414px', '1160px']}
        gridTemplateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)']}
        gridColumnGap="8rem"
        m={['0 auto', '8rem auto']}
      >
        <Text
          fontSize={['1.7rem', '2rem']}
          lineHeight={['2.7rem', '3.6rem']}
          textAlign="justify"
          style={{ wordSpacing: '0.5rem' }}
          m={['3rem 3rem 3rem 3rem', '0 0']}
        >
          {continent.description}
        </Text>
        <Grid
          gridTemplateColumns={['13.2rem 13.2rem 1fr', 'repeat(3, 15.8rem)']}
          justifyItems="start"
          alignItems={['start', 'center']}
          m={['0 3rem 3rem 3rem', '0 0']}
        >
          <NumberAndText
            numberOfCountries={continent.numberOfCountries}
            text="países"
          />
          <NumberAndText
            numberOfCountries={continent.numberOfLanguages}
            text="línguas"
          />
          <Flex m="auto 0" alignItems="flex-end">
            <NumberAndText
              numberOfCountries={continent.numberOfCities}
              text="cidades"
            />
            <Popover>
              <PopoverTrigger>
                <Image
                  cursor="pointer"
                  src="/images/icons/info.svg"
                  p="0 0 7px 7px"
                  w={['1.9rem', '2.3rem']}
                />
              </PopoverTrigger>
              <PopoverContent fontSize="1.65rem">
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>Cidades.</PopoverHeader>
                <PopoverBody>
                  Confira as cidades disponíveis nos cards.
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Flex>
        </Grid>
      </Grid>
      <Box w={['414px', '1160px']} m={['0 auto 2rem auto', '0 auto 4rem auto']}>
        <Heading
          as="h2"
          fontSize="3rem"
          fontWeight="500"
          lineHeight="5.4rem"
          color="dark.700"
          m={['0 3rem', '0 0']}
        >
          Cidades +100
        </Heading>
      </Box>
      <Grid
        gridTemplateColumns={['repeat(1, 1fr)', 'repeat(4, 1fr)']}
        rowGap={['2rem', '3.25rem']}
        w={['414px', '1160px']}
        m={['0 auto 2rem auto', '0 auto 3.5rem auto']}
      >
        {continent.cities.map(city => (
          <Card
            key={city.id}
            cityName={city.name}
            countryName={city.country}
            flag={city.flag}
            cityImage={city.image}
          />
        ))}
      </Grid>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  // const res = await fetch(`${server}/api/continents`);
  // const continents = await res.json();

  const paths = continents.map((continent: Continent) => ({
    params: { id: continent.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // const res = await fetch(`${server}/api/continents/${params?.id}`);
  // const continent = await res.json();

  const selectedContinent = continents.filter(continent => continent.id === params?.id);
  const continent = selectedContinent[0];

  return {
    props: {
      continent,
    },
    revalidate: 60 * 60 * 6, // 6 hours
  };
};
