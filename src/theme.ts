import { createTheme } from '@mantine/core';
import { MANTINE_DEFAULT_COLORS } from './lib/theme/colors';
import { fontSizes, headings, lineHeights } from './lib/theme/typography';

export const theme = createTheme({
  colors: MANTINE_DEFAULT_COLORS,
  primaryColor: 'red',
  black: '#000000',
  white: '#FFFFFF',
  fontFamily: '"Open Sans", sans-serif',
  headings,
  fontSizes,
  lineHeights,
  activeClassName: 'active',
  shadows: {
    sm: '0px 0.97px 5.04px 0px #14141508, 0px 2.67px 13.94px 0px #14141506, 0px 6.43px 33.56px 0px #14141505, 0px 18.95px 100px 0px #14141503',
    md: '0px 0.97px 5.04px 0px #1414150F, 0px 2.67px 13.94px 0px #1414150D, 0px 6.43px 33.56px 0px #1414150A, 0px 18.95px 111.32px 0px #14141507',
  },
  primaryShade: {
    light: 5,
    dark: 5,
  },
});
