import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';

import productsReducer from '../store/products/productsSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});

store.subscribe(()=>{
  localStorage.setItem('cart', JSON.stringify(store.getState().products.cartProducts));
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
