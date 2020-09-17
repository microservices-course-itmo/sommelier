import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../src/theme';
import { GlobalStyle } from '../src/theme/globalStyle';

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  ),
];