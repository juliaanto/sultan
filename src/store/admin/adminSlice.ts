import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IProduct } from '../../types/product';
import { RootState } from '../../app/store';
import mockProductTypes from "../../common/data/product-types.json"

export interface AdminState {
  productTypes: string[];
  products: IProduct[];
}

const localStorageTypes = localStorage.getItem('productTypes');
const localStorageProducts = localStorage.getItem('products');

const initialState: AdminState = {
  productTypes: (localStorageTypes && JSON.parse(localStorageTypes).length > 0) ? JSON.parse(localStorageTypes) : mockProductTypes,
  products: localStorageProducts ? JSON.parse(localStorageProducts) : [],
};

export const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    addProductType: (state, action: PayloadAction<string>) => {
      state.productTypes.push(action.payload);
    },
    removeProductType: (state, action: PayloadAction<string>) => {
      const index = state.productTypes.findIndex((type) => type === action.payload);
      state.productTypes.splice(index, 1);
    },
    addProduct: (state, action: PayloadAction<IProduct>) => {
      state.products.push(action.payload);
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      const index = state.products.findIndex((product) => product.barcode === action.payload);
      state.products.splice(index, 1);
    },
    removeAllProducts: (state) => {
      state.products = [];
    },
  },
});

export const { 
  addProductType,
  removeProductType,
  addProduct,
  removeProduct,
  removeAllProducts,
} = adminSlice.actions;

export const getProductTypes = (state: RootState) => state.admin.productTypes;
export const getProducts = (state: RootState) => state.admin.products;

export default adminSlice.reducer;