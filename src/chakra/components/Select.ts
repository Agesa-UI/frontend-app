import { defineStyleConfig } from '@chakra-ui/react';

const secondaryColor = 'secondary.900';
export const Select = defineStyleConfig({
  baseStyle: {
    field: {
      fontFamily: 'Inter',
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
        borderColor: 'secondary.900',
        _focus: {
          borderColor: 'secondary.700',
          boxShadow: 'none',
        },
      },
      icon: {
        color: secondaryColor,
      },
    },
  },

  defaultProps: {
    variant: 'filled',
  },
});
