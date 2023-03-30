import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';

import filterReducer from '../store/filter/filterSlice';
import productsReducer from '../store/products/productsSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    filter: filterReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
