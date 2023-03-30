import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { SortBy, sortProducts } from "../../common/helpers/sort";

import { IProduct } from '../../types/product';
import { RootState } from '../../app/store';

export interface ProductsState {
  catalog: IProduct[];
  cart: IProduct[];
}

const initialState: ProductsState = {
  catalog: [],
  cart: [],
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setCatalogProducts: (state, action: PayloadAction<IProduct[]>) => {
      state.catalog = action.payload;
    },
    sortCatalogProducts: (state, action: PayloadAction<SortBy>) => {
      sortProducts(action.payload, state.catalog);
    }
  },
});

export const { setCatalogProducts, sortCatalogProducts } = productsSlice.actions;

export const getCatalogProducts = (state: RootState) => state.products.catalog;
export const getCartProducts = (state: RootState) => state.products.cart;

export default productsSlice.reducer;