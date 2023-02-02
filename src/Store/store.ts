import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';
import wishReducer from './slices/wishSlice';
import productReducer from './slices/productSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wish: wishReducer,
    product: productReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;