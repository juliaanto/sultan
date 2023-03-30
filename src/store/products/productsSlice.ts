import { FilterBy, filterProducts } from '../../common/helpers/filter';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { SortBy, sortProducts } from "../../common/helpers/sort";
import { getCheckedValues, getFilterData } from '../../common/helpers/filter-data';

import { IFilterData } from '../../types/filter-data';
import { IProduct } from '../../types/product';
import { RootState } from '../../app/store';

export interface ProductsState {
  initialProducts: IProduct[];
  products: IProduct[];
  productTypeFilter: IFilterData;
  sortBy: SortBy;
}

const initialState: ProductsState = {
  initialProducts: [],
  products: [],
  productTypeFilter: {},
  sortBy: SortBy.titleAsc,
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
      state.sortBy = action.payload;
    },
    filterCatalogProducts: (state, action: PayloadAction<{filterBy: FilterBy}>) => {
      const sortedInitialProducts = sortProducts(state.sortBy, state.initialProducts);
      state.products = filterProducts(action.payload.filterBy, sortedInitialProducts, getCheckedValues(state.productTypeFilter)) as IProduct[];
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

export const getCatalogProducts = (state: RootState) => state.products.products;
export const getProductTypeFilter = (state: RootState) => state.products.productTypeFilter;

export default productsSlice.reducer;