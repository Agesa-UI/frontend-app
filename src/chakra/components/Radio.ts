import { defineStyleConfig } from '@chakra-ui/react';

export const Radio = defineStyleConfig({
  baseStyle: {
    control: {
      borderColor: 'primary.200',
      _checked: {
        bg: 'primary.200 !important',
        border: 'none',
      },
    },
  },
});
