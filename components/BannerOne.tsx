import { Image } from '@chakra-ui/image';
import { Box, Flex, Heading, Text } from '@chakra-ui/layout';

const BannerOne = () => {
  return (
    <Box
      as="section"
      bgImage="url('images/HomeBannerBackground.jpg')"
      bgPosition="center"
      bgSize="cover"
      bgRepeat="no-repeat"
      h={['163px', '335px']}
    >
      <Flex
        w={['375px', '1160px']}
        h="100%"
        alignItems="center"
        justifyContent="space-between"
        margin="0 auto"
      >
        <Box>
          <Heading
            as="h2"
            fontWeight="500"
            lineHeight={['3rem', '5.4rem']}
            fontSize={['2rem', '3.6rem']}
            color="light.500"
            mb={['0.8rem', '3.4rem']}
          >
            5 Continentes,
            <br /> infinitas possibilidades.
          </Heading>
          <Text
            color="light.900"
            fontSize={['1.4rem', '2rem']}
            lineHeight={['2.1rem', '3rem']}
          >
            Chegou a hora de tirar do papel a viagem que você <br /> sempre
            sonhou.
          </Text>
        </Box>
        <Box mt="10rem" display={['none', 'block']}>
          <Image src="/images/Airplane.svg" alt="Airplane" />
        </Box>
      </Flex>
    </Box>
  );
};

export default BannerOne;
