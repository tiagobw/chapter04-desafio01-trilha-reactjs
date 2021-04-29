import { Image } from '@chakra-ui/image';
import { Box, Flex, Grid, Heading, Text } from '@chakra-ui/layout';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
} from '@chakra-ui/react';
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next';

import BannerTwo from '../../components/BannerTwo';
import NumberAndText from '../../components/smallChakra/NumberAndText';

import { server } from '../../config';

import { Continent } from '../../data';

interface ContinentPageProps {
  continent: Continent;
}

export default function ContinentPage({ continent }: ContinentPageProps) {
  return (
    <>
      <BannerTwo bannerImage={continent.bannerImage} name={continent.name} />
      <Grid
        as="section"
        w={['414px', '1160px']}
        gridTemplateColumns="repeat(2, 1fr)"
        gridColumnGap="5rem"
        m="8rem auto"
      >
        <Text
          fontSize="2rem"
          lineHeight="3.6rem"
          textAlign="justify"
          style={{ wordSpacing: '0.5rem' }}
        >
          {continent.description}
        </Text>
        <Grid gridTemplateColumns="repeat(3, 1fr)">
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
              text="cidades +100"
            />
            <Popover>
              <PopoverTrigger>
                <Image
                  cursor="pointer"
                  src="/images/icons/info.svg"
                  p="0 0 7px 7px"
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
      <Box w={['414px', '1160px']} m="0 auto 4rem auto">
        <Heading
          as="h2"
          fontSize="3rem"
          fontWeight="500"
          lineHeight="5.4rem"
          color="dark.700"
        >
          Cidades +100
        </Heading>
      </Box>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`${server}/api/continents`);
  const continents = await res.json();

  const paths = continents.map((continent: Continent) => ({
    params: { id: continent.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(`${server}/api/continents/${params?.id}`);
  const continent = await res.json();

  return {
    props: {
      continent,
    },
    revalidate: 60 * 60 * 6, // 6 hours
  };
};
