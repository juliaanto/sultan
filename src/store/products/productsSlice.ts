import { FilterBy, IFilters, IPriceFilter } from '../../types/filters';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { SortBy, sortProducts } from "../../common/helpers/sort";

import { IProduct } from '../../types/product';
import { RootState } from '../../app/store';
import { filterProducts } from '../../common/helpers/filter';
import { getFilterData } from '../../common/helpers/filter-data';

export interface ProductsState {
  initialProducts: IProduct[];
  products: IProduct[];
  filter: IFilters;
  sort: SortBy;
}

const initialState: ProductsState = {
  initialProducts: [],
  products: [],
  filter: {
    [FilterBy.price]: {
      [IPriceFilter.priceMin]: 0,
      [IPriceFilter.priceMax]: 0,
    },
    [FilterBy.productType]: {},
    [FilterBy.producer]: {},
  },
  sort: SortBy.titleAsc,
};

export const productsSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    setCatalogProducts: (state, action: PayloadAction<IProduct[]>) => {
      state.products = action.payload;
      state.initialProducts = action.payload;
    },
    sortCatalogProducts: (state, action: PayloadAction<SortBy>) => {
      sortProducts(action.payload, state.products);
      state.sort = action.payload;
    },
    filterCatalogProducts: (state) => {
      const sortedInitialProducts = sortProducts(state.sort, state.initialProducts);
      state.products = filterProducts(sortedInitialProducts, state.filter);
    },
    setInitialFilter: (state) => {
      state.filter[FilterBy.productType] = getFilterData(state.initialProducts, FilterBy.productType);
      state.filter[FilterBy.producer] = getFilterData(state.initialProducts, FilterBy.producer);
    },
    setProductTypeFilterValue: (state, action: PayloadAction<{id: string, isChecked: boolean}>) => {
      const productTypeFilter = state.filter[FilterBy.productType][action.payload.id];
      productTypeFilter.isChecked = action.payload.isChecked;
    },
    setProducerFilterValue: (state, action: PayloadAction<{id: string, isChecked: boolean}>) => {
      const producerFilter = state.filter[FilterBy.producer][action.payload.id];
      producerFilter.isChecked = action.payload.isChecked;
    },
  },
});

export const { setCatalogProducts, sortCatalogProducts, filterCatalogProducts, setProductTypeFilterValue, setProducerFilterValue, setInitialFilter } = productsSlice.actions;

export const getCatalogProducts = (state: RootState) => state.products.products;
export const getProductTypeFilter = (state: RootState) => state.products.filter;

export default productsSlice.reducer;