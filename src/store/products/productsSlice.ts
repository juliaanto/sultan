import { FilterBy, IFilters, PriceFilter } from '../../types/filters';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { SortBy, sortProducts } from "../../common/helpers/sort";
import { addProductToCart, removeItemFromCart, removeProduct } from '../../common/helpers/cart';

import { ICartItem } from '../../types/cart-item';
import { IProduct } from '../../types/product';
import { RootState } from '../../app/store';
import { filterProducts } from '../../common/helpers/filter';
import { getFilterData } from '../../common/helpers/filter-data';

export interface ProductsState {
  initialProducts: IProduct[];
  catalogProducts: IProduct[];
  cartProducts: ICartItem[];
  filter: IFilters;
  sort: SortBy;
}

const localStorageState = localStorage.getItem('cart');

const initialState: ProductsState = {
  initialProducts: [],
  catalogProducts: [],
  cartProducts: localStorageState ? JSON.parse(localStorageState) : [],
  filter: {
    [FilterBy.Price]: {
      [PriceFilter.PriceMin]: "",
      [PriceFilter.PriceMax]: "",
    },
    [FilterBy.ProductType]: {},
    [FilterBy.Producer]: {},
  },
  sort: SortBy.TitleAsc,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setCatalogProducts: (state, action: PayloadAction<IProduct[]>) => {
      state.catalogProducts = action.payload;
      state.initialProducts = action.payload;
    },
    setInitialFilter: (state) => {
      state.filter[FilterBy.ProductType] = getFilterData(state.initialProducts, FilterBy.ProductType);
      state.filter[FilterBy.Producer] = getFilterData(state.initialProducts, FilterBy.Producer);
    },
    setProductTypeFilterValue: (state, action: PayloadAction<{id: string, isChecked: boolean}>) => {
      const productTypeFilter = state.filter[FilterBy.ProductType][action.payload.id];
      productTypeFilter.isChecked = action.payload.isChecked;
    },
    setProducerFilterValue: (state, action: PayloadAction<{id: string, isChecked: boolean}>) => {
      const producerFilter = state.filter[FilterBy.Producer][action.payload.id];
      producerFilter.isChecked = action.payload.isChecked;
    },
    setPriceFilterValue: (state, action: PayloadAction<{priceMin?: string, priceMax?: string}>) => {
      const priceMin = action.payload.priceMin;
      const priceMax = action.payload.priceMax;

      if (priceMin) {
        state.filter[FilterBy.Price][PriceFilter.PriceMin] = priceMin;
      }

      if (priceMax) {
        state.filter[FilterBy.Price][PriceFilter.PriceMax] = priceMax;
      }
    },
    filterCatalogProducts: (state) => {
      const sortedInitialProducts = sortProducts(state.sort, state.initialProducts);
      state.catalogProducts = filterProducts(sortedInitialProducts, state.filter);
    },
    sortCatalogProducts: (state, action: PayloadAction<SortBy>) => {
      sortProducts(action.payload, state.catalogProducts);
      state.sort = action.payload;
    },
    addProduct: (state, action: PayloadAction<number>) => {
      const cartItems = state.cartProducts;
      const targetBarcode = action.payload;
      const catalogProducts = state.catalogProducts;
      
      addProductToCart(cartItems, targetBarcode, catalogProducts);

    },
    removeOneItem: (state, action: PayloadAction<number>) => {
      const cartItems = state.cartProducts;
      const targetBarcode = action.payload;
      
      removeItemFromCart(cartItems, targetBarcode);
    },
    removeProductFromCart: (state, action: PayloadAction<number>) => {
      const cartItems = state.cartProducts;
      const targetBarcode = action.payload;

      removeProduct(cartItems, targetBarcode);
    },
    clearCart: (state) => {
      state.cartProducts = [];
    },
  },
});

export const { 
  setCatalogProducts, 
  sortCatalogProducts, 
  filterCatalogProducts, 
  setProductTypeFilterValue, 
  setProducerFilterValue, 
  setInitialFilter, 
  setPriceFilterValue, 
  addProduct,
  removeOneItem,
  removeProductFromCart,
  clearCart,
} = productsSlice.actions;

export const getCatalogProducts = (state: RootState) => state.products.catalogProducts;
export const getCatalogInitialProducts = (state: RootState) => state.products.initialProducts;
export const getCartProducts = (state: RootState) => state.products.cartProducts;
export const getFilter = (state: RootState) => state.products.filter;

export default productsSlice.reducer;