import { Box, Flex } from '@chakra-ui/layout';
import React from 'react';

const BannerOne = () => {
  return (
    <Flex
      as="section"
      bgImage="url('images/HomeBannerBackground.jpg')"
      bgPosition="center"
      bgRepeat="no-repeat"
      h="335px"
    >
      <Box w="1160px" />
    </Flex>
  );
};

export default BannerOne;
