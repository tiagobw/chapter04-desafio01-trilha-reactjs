import { Box, Grid } from '@chakra-ui/layout';
import React from 'react';
import TravelType from './TravelType';
// import { useMediaQuery } from '@chakra-ui/react';
import { useWindowSize } from '../hooks/useWindowSize';

const travelTypes = [
  {
    icon: 'cocktail',
    text: 'vida noturna',
  },
  {
    icon: 'surf',
    text: 'praia',
  },
  {
    icon: 'building',
    text: 'moderno',
  },
  {
    icon: 'museum',
    text: 'clássico',
  },
  {
    icon: 'earth',
    text: 'e mais...',
  },
];

export const TravelTypes = () => {
  // const [isLessThan414] = useMediaQuery('(max-width: 414px)');
  const windowsize = useWindowSize();
  const isLessThan414 = windowsize.width! <= 414;

  return (
    <Grid
      w={['275px', '1160px']}
      gridTemplateColumns={['repeat(2, 1fr)', 'repeat(5, 1fr)']}
      gridColumnGap={["0", "6rem"]}
      margin={['4rem auto 0 auto', '11.4rem auto 0 auto']}
    >
      {travelTypes.map(({ icon, text }, index) => (
        <React.Fragment key={icon}>
          {isLessThan414 ? (
            <Box
              justifySelf={
                index === travelTypes.length - 1
                  ? 'center'
                  : index % 2 === 0
                  ? 'start'
                  : 'end'
              }
              gridColumn={
                index === travelTypes.length - 1 ? 'span 2' : 'span 1'
              }
              mb={index === travelTypes.length - 1 ? '0' : '2.7rem'}
            >
              <TravelType
                icon={icon}
                text={text}
                isLessThan414={isLessThan414}
              />
            </Box>
          ) : (
            <TravelType icon={icon} text={text} isLessThan414={isLessThan414} />
          )}
        </React.Fragment>
      ))}
    </Grid>
  );
};