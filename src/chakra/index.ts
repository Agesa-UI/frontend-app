import { theme as Theme, extendTheme } from '@chakra-ui/react';
import { colors } from './colors';
import {
  Button,
  Checkbox,
  Input,
  Select,
  Heading,
  Radio,
  Tag,
} from './components';

const theme = extendTheme({
  textStyles: {
    profileBoldText: {
      fontWeight: '600',
      fontSize: '14px',
    },
    footLightGrey: {
      lineHeight: '26px',
      letterSpacing: '0.05em',
      fontSize: '11px',
      color: 'white',
      fontWeight: '500',
      opacity: 0.25,
      fontFamily: 'Poppins',
    },
    footerColorItem: {
      lineHeight: '26px',
      letterSpacing: '0.05em',
      fontSize: '13px',
      fontWeight: '500',
      color: 'white',
      fontFamily: 'Poppins',
    },
  },
  breakpoints: {
    xs: '480px',
    sm: '600px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
    '2xl': '1536px',
  },
  fonts: {
    Heading: `Open Sans ${Theme.fonts.body}`,
    body: `Open Sans, ${Theme.fonts.body}`,
  },
  colors,
  components: {
    Button,
    Checkbox,
    Radio,
    Input,
    Select,
    Heading,
    Tag,
  },

  shadows: {
    shadow: '0px 3px 10px  rgba(0,0,0,0.2)',
  },

  withDefaultColorScheme: {
    colorScheme: 'primary',
    components: ['Button', 'Checkbox'],
  },
});

export default theme;
