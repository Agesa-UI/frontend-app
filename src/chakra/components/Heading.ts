import { defineStyle } from '@chakra-ui/react';

export const Heading = defineStyle({
  variants: {
    lightHeader: {
      color: 'secondary.700',
      fontWeight: '400',
      fontFamily: 'Montserrat',
      fontSize: '40px',
      '@media screen and (max-width: 600px)': {
        fontSize: '30px',
      },
    },
    subHeader: {
      fontWeight: '500',
      fontSize: '14px',
      lineHeight: '20px',
      fontFamily: 'Montserrat',
    },
    stepHeader: {
      fontWeight: '600',
      fontSize: '14px',
      lineHeight: '20px',
      fontFamily: 'Montserrat',
      color: 'secondary.700',
    },
  },
});
