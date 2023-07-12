import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';

import adminReducer from '../store/admin/adminSlice';
import productsReducer from '../store/products/productsSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    admin: adminReducer,
  },
});

store.subscribe(()=>{
  localStorage.setItem('cart', JSON.stringify(store.getState().products.cartProducts));
  localStorage.setItem('productTypes', JSON.stringify(store.getState().admin.productTypes));
  localStorage.setItem('products', JSON.stringify(store.getState().admin.products));
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
