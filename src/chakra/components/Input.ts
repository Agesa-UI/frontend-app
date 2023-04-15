import { defineStyleConfig } from '@chakra-ui/react';

export const Input = defineStyleConfig({
  baseStyle: {
    field: {
      fontFamily: 'montserrat',
    },
  },
  variants: {
    filled: {
      field: {
        _focus: {
          borderColor: 'secondary.800',
        },
        borderRadius: '5px',
      },
    },
    outline: {
      field: {
        border: '1px solid',
        borderColor: '#DADADA',
        _focus: {
          borderColor: 'secondary.700',
          boxShadow: 'none',
        },
      },
    },
  },

  defaultProps: {
    variant: 'filled',
  },
});
