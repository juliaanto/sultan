import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Catalog } from "./pages";
import GlobalStyle from "./theme/globalStyle";
import React from "react";
import { ThemeProvider } from "styled-components";
import { productsJson } from "./common/data/products";
import { setCatalogProducts } from "./store/products/productsSlice";
import { setInitialFilter } from "./store/filter/filterSlice";
import theme from "./theme/theme";
import { useAppDispatch } from "./app/hooks";

function App() {
  const initialProducts = JSON.parse(productsJson);
  const dispatch = useAppDispatch();
  dispatch(setCatalogProducts(initialProducts));
  dispatch(setInitialFilter(initialProducts));
  
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
