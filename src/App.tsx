import { Catalog } from './pages';
import GlobalStyle from './theme/globalStyle';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Catalog />
    </ThemeProvider>
  );
}

export default App;
