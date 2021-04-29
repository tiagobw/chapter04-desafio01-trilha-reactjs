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
        <Box>
          <Heading
            position="absolute"
            bottom="30px"
            as="h2"
            fontWeight="600"
            lineHeight={['3rem', '7.2rem']}
            fontSize={['2rem', '4.8rem']}
            color="light.500"
            mb={['0.8rem', '3.4rem']}
          >
            {name}
          </Heading>
        </Box>
      </Flex>
    </Box>
  );
};

export default BannerOne;
