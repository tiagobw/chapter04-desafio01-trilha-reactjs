import { Box, Flex, Heading, Text } from '@chakra-ui/layout';

interface BannerOneProps {
  name: string;
  bannerImage: string;
}

const BannerOne = ({ name, bannerImage }: BannerOneProps) => {
  return (
    <Box
      as="section"
      pos="relative"
      h={['163px', '500px']}
      bg="rgb(20, 20, 1)"
      _before={{
        content: '""',
        bgImage: `url(${bannerImage})`,
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
    >
      <Flex
        position="relative"
        w={['414px', '1160px']}
        h="100%"
        alignItems="center"
        justifyContent="space-between"
        margin="0 auto"
      >
        <Heading
          position="absolute"
          bottom={['auto', '6rem']}
          left={['50%', 'auto']}
          top={['50%', 'auto']}
          transform={['translate(-50%, -50%)', 'translate(0, 0)']}
          as="h2"
          fontWeight="600"
          lineHeight={['4.8rem', '7.2rem']}
          fontSize={['3rem', '4.8rem']}
          color="light.500"
        >
          {name}
        </Heading>
      </Flex>
    </Box>
  );
};

export default BannerOne;
