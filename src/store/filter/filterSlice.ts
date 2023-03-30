import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IFilterData } from '../../types/filter-data';
import { IProduct } from '../../types/product';
import { RootState } from '../../app/store';
import { getFilterData } from '../../common/helpers/filter';

export interface FilterState {
  productType: IFilterData;
}

const initialState: FilterState = {
  productType: {},
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setInitialFilter: (state, action: PayloadAction<IProduct[]>) => {
      state.productType = getFilterData(action.payload, "productType")
    },
    setFilterValue: (state, action: PayloadAction<{id: string, isChecked: boolean}>) => {
      state.productType[action.payload.id].isChecked = action.payload.isChecked;
    },
  },
});

export const { setFilterValue, setInitialFilter } = filterSlice.actions;

export const getProductTypeFilter = (state: RootState) => state.filter.productType;

export default filterSlice.reducer;