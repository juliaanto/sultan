import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cart, Catalog, Product } from "./pages";
import { setCatalogProducts, setInitialFilter } from "./store/products/productsSlice";

import Admin from "./pages/admin";
import { AppRoute } from "./common/data/app-route";
import GlobalStyle from "./theme/globalStyle";
import { IProduct } from "./types/product";
import { ThemeProvider } from "styled-components";
import mockProducts from "./common/data/products.json"
import theme from "./theme/theme";
import { useAppDispatch } from "./app/hooks";

function App() {
  const adminProducts = localStorage.getItem("products");
  const products = adminProducts ? JSON.parse(adminProducts) : mockProducts;

  const dispatch = useAppDispatch();
  dispatch(setCatalogProducts(products as IProduct[]));
  dispatch(setInitialFilter());
  
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path={AppRoute.Main} element={<Catalog />} />
          <Route path={AppRoute.Catalog} element={<Catalog />} />
          <Route path={AppRoute.Cart} element={<Cart />} />
          <Route path={AppRoute.Product} element={<Product />} />
          <Route path={AppRoute.Admin} element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
