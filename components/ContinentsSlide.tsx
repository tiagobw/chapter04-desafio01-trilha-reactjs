import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Box, Heading, Text } from '@chakra-ui/layout';

const continents = [
  {
    image: 'AmericaNorte',
    name: 'América do Norte',
    text: 'Venha para a América do Norte!',
  },
  {
    image: 'AmericaSul',
    name: 'América do Sul',
    text: 'Conheça a América do Sul!',
  },
  {
    image: 'Asia',
    name: 'Ásia',
    text: 'Quer conhecer a Ásia?',
  },
  {
    image: 'Africa',
    name: 'África',
    text: 'Venha para a África!',
  },
  {
    image: 'Europa',
    name: 'Europa',
    text: 'Conheça a Europa!',
  },
  {
    image: 'Oceania',
    name: 'Oceania',
    text: 'Quer conhecer a Oceania?',
  },
];

SwiperCore.use([Navigation, Pagination]);

export default function ContinentsSlide() {
  const slides = continents.map(({ image, name, text }) => (
    <SwiperSlide key={image} tag="li" style={{ listStyle: 'none' }}>
      <Box
        pos="relative"
        h={'450px'}
        bg="rgb(0, 0, 0)"
        _before={{
          content: '""',
          bgImage: `url(images/${image}.jpg)`,
          bgPosition: 'center',
          bgSize: 'cover',
          bgRepeat: 'no-repeat',
          pos: 'absolute',
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
          opacity: 0.35,
        }}
      ></Box>
      <Box
        // display="flex"
        // flexDirection="column"
        // justifyContent="center"
        // alignItems="center"
        pos="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        textAlign="center"
      >
        <Heading
          as="h3"
          fontSize={['2.4rem', '4.8rem']}
          lineHeight={['3.6rem', '7.2rem']}
          fontWeight="700"
          color="light.500"
          textAlign="center"
        >
          {name}
        </Heading>
        <Text
          fontSize={["1.4rem", "2.4rem"]}
          lineHeight={["2.1rem", "3.6rem"]}
          fontWeight="700"
          color="light.900"
          textAlign="center"
          mt="1.5rem"
        >
          {text}
        </Text>
      </Box>
    </SwiperSlide>
  ));

  return (
    <>
      <Swiper
        id="main"
        tag="section"
        wrapperTag="ul"
        navigation
        pagination
        spaceBetween={0}
        slidesPerView={1}
        onInit={swiper => console.log('Swiper initialized!', swiper)}
        onSlideChange={swiper => {
          console.log('Slide index changed to: ', swiper.activeIndex);
        }}
        onReachEnd={() => console.log('Swiper end reached')}
      >
        {slides}
      </Swiper>
    </>
  );
}
