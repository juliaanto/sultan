import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Catalog } from "./pages";
import GlobalStyle from "./theme/globalStyle";
import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Catalog />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
