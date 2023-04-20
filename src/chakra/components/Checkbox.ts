import { defineStyleConfig } from '@chakra-ui/react';

export const Checkbox = defineStyleConfig({
  variants: {
    rounded: {
      control: {
        borderRadius: 'full',
        backgroundColor: '#D9D9D9',
        border: '1px solid primary.100',
      },

      label: {
        fontSize: '12px',
        fontWeight: '500',
        color: '#000000',
      },
    },
    outlined: {
      control: {
        borderColor: 'primary.100',
      },
    },
  },
});
