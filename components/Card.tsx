import { Image } from '@chakra-ui/image';
import { Box, Flex, Grid, Heading, Text } from '@chakra-ui/layout';
import React from 'react';

interface CardProps {
  cityName: string;
  countryName: string;
  flag: string;
  cityImage: string;
}

export default function Card({
  cityName,
  countryName,
  flag,
  cityImage,
}: CardProps) {
  return (
    <Grid w="256px" h="279px" gridTemplateRows="62% 38%" m={["0 auto", "0 0"]}>
      <Box
        pos="relative"
        bg="rgb(20, 0, 0)"
        _before={{
          content: '""',
          bgImage: `url(${cityImage})`,
          bgPosition: 'center',
          bgSize: 'cover',
          bgRepeat: 'no-repeat',
          pos: 'absolute',
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
          opacity: 0.75,
        }}
      />
      <Flex
        backgroundColor="#FFFFFF"
        border="1px solid #FFBA08"
        boxSizing="border-box"
        borderBottomLeftRadius="4px"
        borderBottomRightRadius="4px"
        borderTop="0"
        alignItems="center"
        justifyContent="space-between"
        p="0 2.4rem"
      >
        <Flex flexDirection="column">
          <Heading
            as="h2"
            fontFamily="barlow"
            fontSize="2rem"
            fontWeight="600"
            lineHeight="2.5rem"
            color="dark.700"
            mb="1.2rem"
          >
            {cityName}
          </Heading>
          <Text
            fontFamily="barlow"
            fontSize="1.6rem"
            fontWeight="500"
            lineHeight="2.6rem"
            color="dark.500"
          >
            {countryName}
          </Text>
        </Flex>
        <Image src={flag} />
      </Flex>
    </Grid>
  );
}
