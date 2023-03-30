import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { SortBy, sortProducts } from "../../common/helpers/sort";

import { IProduct } from '../../types/product';
import { RootState } from '../../app/store';
import { productsJson } from '../../common/data/products';

export interface ProductsState {
  catalog: IProduct[];
  cart: IProduct[];
}

const initialState: ProductsState = {
  catalog: JSON.parse(productsJson),
  cart: [],
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    updateProductsInCatalog: (state, action: PayloadAction<IProduct[]>) => {
      state.catalog = action.payload;
    },
    sortProductsInCatalog: (state, action: PayloadAction<SortBy>) => {
      state.catalog = sortProducts(action.payload, state.catalog);
    }
  },
});

export const { updateProductsInCatalog, sortProductsInCatalog } = productsSlice.actions;

export const getProductsInCatalog = (state: RootState) => state.products.catalog;
export const getProductsInCart = (state: RootState) => state.products.cart;

export default productsSlice.reducer;