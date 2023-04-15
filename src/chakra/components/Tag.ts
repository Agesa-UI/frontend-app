import { defineStyleConfig } from '@chakra-ui/react';

const TagCustomStyles = {
  container: { padding: '2px 15px' },
  label: { fontSize: '12px', fontWeight: '400' },
};

export const Tag = defineStyleConfig({
  variants: {
    green: {
      container: {
        ...TagCustomStyles.container,
        bg: 'rgba(50, 147, 111, 0.12)',
      },
      label: {
        ...TagCustomStyles.label,
        color: '#32936F',
      },
    },
    red: {
      container: {
        ...TagCustomStyles.container,
        bg: 'rgba(245, 126, 119, 0.12)',
      },
      label: {
        ...TagCustomStyles.label,
        color: '#CC5F5F',
      },
    },
  },
});
