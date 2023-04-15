import { defineStyleConfig } from '@chakra-ui/react';

export const Radio = defineStyleConfig({
  baseStyle: {
    control: {
      borderColor: 'primary.400',
      _checked: {
        bg: 'primary.400 !important',
        border: 'none',
      },
    },
  },
});
