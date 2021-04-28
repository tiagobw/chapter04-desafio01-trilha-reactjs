import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';
import { useMediaQuery } from '@chakra-ui/react';

interface TravelTypeProps {
  icon: string;
  text: string;
  isLessThan414: boolean;
}

export default function TravelType({
  icon,
  text,
  isLessThan414,
}: TravelTypeProps) {
  return (
    <Flex
      flexDirection={['row', 'column']}
      justifyContent={'center'}
      alignItems="center"
    >
      <Image
        src={!isLessThan414 ? `/images/${icon}.svg` : `images/Ellipse.svg`}
        alt={icon}
        width={!isLessThan414 ? '85px' : '8px'}
      />
      <Text
        color="dark.700"
        fontWeight="600"
        fontSize={['1.8rem', '2.4rem']}
        lineHeight={['2.7rem', '3.6rem']}
        mt={['0', '2.4rem']}
        ml={['1rem', '0']}
      >
        {text}
      </Text>
    </Flex>
  );
}
