import { defineStyle } from '@chakra-ui/react';

export const Heading = defineStyle({
  variants: {
    lightHeader: {
      color: 'primary.100',
      fontWeight: '400',
      fontFamily: 'Open Sans',
      fontSize: '40px',
      '@media screen and (max-width: 600px)': {
        fontSize: '30px',
      },
    },
    subHeader: {
      fontWeight: '500',
      fontSize: '14px',
      lineHeight: '20px',
      fontFamily: 'Open Sans',
    },
    stepHeader: {
      fontWeight: '600',
      fontSize: '14px',
      lineHeight: '20px',
      fontFamily: 'Open Sans',
      color: 'primary.100',
    },
  },
});
