import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cart, Catalog, Product } from "./pages";
import { setCatalogProducts, setInitialFilter } from "./store/products/productsSlice";

import { AppRoute } from "./common/data/app-route";
import GlobalStyle from "./theme/globalStyle";
import { IProduct } from "./types/product";
import React from "react";
import { ThemeProvider } from "styled-components";
import products from "./common/data/products.json"
import theme from "./theme/theme";
import { useAppDispatch } from "./app/hooks";

function App() {
  const dispatch = useAppDispatch();
  dispatch(setCatalogProducts(products as IProduct[]));
  dispatch(setInitialFilter());
  
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Main} element={<Catalog />} />
          <Route path={AppRoute.Catalog} element={<Catalog />} />
          <Route path={AppRoute.Cart} element={<Cart />} />
          <Route path={AppRoute.Product} element={<Product />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
