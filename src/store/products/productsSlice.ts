import { FilterBy, IFilters, PriceFilter } from '../../types/filters';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { SortBy, sortProducts } from "../../common/helpers/sort";

import { ICartItem } from '../../types/cart-item';
import { IProduct } from '../../types/product';
import { RootState } from '../../app/store';
import { filterProducts } from '../../common/helpers/filter';
import { getFilterData } from '../../common/helpers/filter-data';
import { getProductByBarcode } from '../../common/helpers/cart';

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
      [PriceFilter.PriceMin]: 0,
      [PriceFilter.PriceMax]: 0,
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
    setPriceFilterValue: (state, action: PayloadAction<{priceMin: number, priceMax: number}>) => {
      state.filter[FilterBy.Price][PriceFilter.PriceMin] = action.payload.priceMin;
      state.filter[FilterBy.Price][PriceFilter.PriceMax] = action.payload.priceMax;
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
      const cartItem = cartItems.find(({ product }) => product.barcode === targetBarcode);
  
      if (cartItem) {
        cartItem.count++;
      } else {
        const addedProduct: IProduct | undefined = getProductByBarcode(state.catalogProducts, action.payload);
        addedProduct && state.cartProducts.push({
            product: addedProduct,
            count: 1,
          })
      }
    },
    removeOneItem: (state, action: PayloadAction<number>) => {
      const cartItems = state.cartProducts;
      const targetBarcode = action.payload;
      const cartItem = cartItems.find(({ product }) => product.barcode === targetBarcode);

      if (!cartItem) {
        return;
      }
      
      const cartItemCount = cartItem.count;

      if (cartItemCount > 1) {
        cartItem.count--;
      } else {
        const index = state.cartProducts.indexOf(cartItem);
        state.cartProducts.splice(index, 1);
      }
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
  clearCart 
} = productsSlice.actions;

export const getCatalogProducts = (state: RootState) => state.products.catalogProducts;
export const getCartProducts = (state: RootState) => state.products.cartProducts;
export const getProductTypeFilter = (state: RootState) => state.products.filter;

export default productsSlice.reducer;