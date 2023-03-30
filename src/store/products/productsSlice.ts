import { FilterBy, filterProducts } from '../../common/helpers/filter';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { SortBy, sortProducts } from "../../common/helpers/sort";
import { getCheckedValues, getFilterData } from '../../common/helpers/filter-data';

import { IFilterData } from '../../types/filter-data';
import { IProduct } from '../../types/product';
import { RootState } from '../../app/store';

export interface ProductsState {
  initial: IProduct[];
  catalog: IProduct[];
  cart: IProduct[];
  productTypeFilter: IFilterData;
}

const initialState: ProductsState = {
  initial: [],
  catalog: [],
  cart: [],
  productTypeFilter: {},
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setCatalogProducts: (state, action: PayloadAction<IProduct[]>) => {
      state.catalog = action.payload;
      state.initial = action.payload;
    },
    sortCatalogProducts: (state, action: PayloadAction<SortBy>) => {
      sortProducts(action.payload, state.catalog);
    },
    filterCatalogProducts: (state, action: PayloadAction<{filterBy: FilterBy}>) => {
      state.catalog = filterProducts(action.payload.filterBy, state.initial, getCheckedValues(state.productTypeFilter)) as IProduct[];
    },
    setInitialFilter: (state, action: PayloadAction<IProduct[]>) => {
      state.productTypeFilter = getFilterData(action.payload, "productType")
    },
    setFilterValue: (state, action: PayloadAction<{id: string, isChecked: boolean}>) => {
      state.productTypeFilter[action.payload.id].isChecked = action.payload.isChecked;
    },
  },
});

export const { setCatalogProducts, sortCatalogProducts, filterCatalogProducts, setFilterValue, setInitialFilter } = productsSlice.actions;

export const getCatalogProducts = (state: RootState) => state.products.catalog;
export const getCartProducts = (state: RootState) => state.products.cart;
export const getProductTypeFilter = (state: RootState) => state.products.productTypeFilter;

export default productsSlice.reducer;