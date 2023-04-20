import { defineStyleConfig } from '@chakra-ui/react';

export const Input = defineStyleConfig({
  baseStyle: {
    field: {
      fontFamily: 'Open Sans',
      background: 'white',
    },
  },
  variants: {
    filled: {
      field: {
        _focus: {
          borderColor: 'primary.100',
        },
        borderRadius: '5px',
      },
    },
    outline: {
      field: {
        border: '1px solid',
        borderColor: 'primary.100',
        _focus: {
          borderColor: 'primary.200',
          boxShadow: 'none',
        },
      },
    },
  },

  defaultProps: {
    variant: 'filled',
  },
});
