import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Box, Heading, Text } from '@chakra-ui/layout';
import Link from 'next/link';

const continents = [
  {
    id: '1',
    image: 'Europa',
    name: 'Europa',
    text: 'Conheça a Europa!',
  },
  {
    id: '2',
    image: 'AmericaNorte',
    name: 'América do Norte',
    text: 'Venha para a América do Norte!',
  },
  {
    id: '3',
    image: 'AmericaSul',
    name: 'América do Sul',
    text: 'Conheça a América do Sul!',
  },
  {
    id: '4',
    image: 'Asia',
    name: 'Ásia',
    text: 'Quer conhecer a Ásia?',
  },
  {
    id: '5',
    image: 'Africa',
    name: 'África',
    text: 'Venha para a África!',
  },
  {
    id: '6',
    image: 'Oceania',
    name: 'Oceania',
    text: 'Quer conhecer a Oceania?',
  },
];

SwiperCore.use([Navigation, Pagination]);

export default function ContinentsSlide() {
  const slides = continents.map(({ id, image, name, text }) => (
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
      <Link href={`/continents/${id}`}>
        <Box
          role="group"
          cursor="pointer"
          pos="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          textAlign="center"
        >
          <Heading
            _groupHover={{ color: 'highlight.900' }}
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
            _groupHover={{ textDecoration: 'underline', textDecorationColor: '#FFBA08' }}
            fontSize={['1.4rem', '2.4rem']}
            lineHeight={['2.1rem', '3.6rem']}
            fontWeight="700"
            color="light.900"
            textAlign="center"
            mt="1.5rem"
          >
            {text}
          </Text>
        </Box>
      </Link>
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
