import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { RootState } from '../../app/store';

export interface AdminState {
  productTypes: string[];
}

const localStorageState = localStorage.getItem('productTypes');

const initialState: AdminState = {
  productTypes: localStorageState ? JSON.parse(localStorageState) : [],
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
  },
});

export const { 
  addProductType,
  removeProductType,
} = adminSlice.actions;

export const getProductTypes = (state: RootState) => state.admin.productTypes;

export default adminSlice.reducer;