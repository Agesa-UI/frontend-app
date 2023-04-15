import { defineStyleConfig } from '@chakra-ui/react';

const primary = 'primary.200';
const buttonStyles = {
  backgroundColor: primary,
  color: 'white',
  boxShadow: 'none',
  rounded: '10px',
  fontWeight: '500',
  fontSize: '16px',
  _hover: {
    backgroundColor: 'primary.100',
    color: 'white',
    boxShadow: 'none',
    _disabled: {
      opacity: 0.6,
      cursor: 'not-allowed',
    },
  },
  _active: {
    opacity: 0.6,
  },
  _disabled: {
    opacity: 0.6,
    cursor: 'not-allowed',
    boxShadow: 'shadow',
  },
};

export const Button = defineStyleConfig({
  variants: {
    primary: {
      backgroundColor: primary,
      color: 'white',
      _hover: {
        backgroundColor: 'white',
        color: primary,
      },
      _active: {
        backgroundColor: 'white',
        color: primary,
      },
      _disabled: {
        backgroundColor: primary,
      },
    },
    secondary: buttonStyles,
  },
});
