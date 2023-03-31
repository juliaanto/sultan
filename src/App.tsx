import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cart, Catalog } from "./pages";
import { setCatalogProducts, setInitialFilter } from "./store/products/productsSlice";

import { AppRoute } from "./common/data/app-route";
import GlobalStyle from "./theme/globalStyle";
import React from "react";
import { ThemeProvider } from "styled-components";
import { productsJson } from "./common/data/products";
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
          <Route path={AppRoute.Main} element={<Catalog />} />
          <Route path={AppRoute.Catalog} element={<Catalog />} />
          <Route path={AppRoute.Cart} element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
