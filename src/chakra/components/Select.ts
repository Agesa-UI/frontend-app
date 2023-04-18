import { defineStyleConfig } from '@chakra-ui/react';

const secondaryColor = 'primary.200';
export const Select = defineStyleConfig({
  baseStyle: {
    field: {
      fontFamily: 'Open Sans',
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
      icon: {
        color: secondaryColor,
      },
    },
  },

  defaultProps: {
    variant: 'filled',
  },
});
