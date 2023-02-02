import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '@/UI/ProductPage/Types';
import { CartState } from './Types';
import { findItemInCart } from '@/utils/functions';

const initialState: CartState = {
  cartProducts: [],
  totalCost: 0,
}

export const cart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {

      const itemInCart = findItemInCart(state.cartProducts, action.payload.id);

      if (itemInCart) {
        itemInCart.quantity++;
      }
      else {
        state.cartProducts.push({ product: action.payload, quantity: 1 });
      }

      state.totalCost += action.payload.price;
    },
    setDataFromLocal: (state, action: PayloadAction<CartState>) => {
      state.cartProducts = action.payload.cartProducts;
      state.totalCost = action.payload.totalCost;
    },
    removeItem: (state, action: PayloadAction<Product>) => {

      const itemInCart = findItemInCart(state.cartProducts, action.payload.id);

      state.cartProducts = state.cartProducts.filter((item) => item !== itemInCart);

      let totalCost: number = 0;
      state.cartProducts.forEach(item => {
        totalCost += item.product.price;
      })

      state.totalCost = totalCost;
    },
  }
})

export const { addToCart, setDataFromLocal, removeItem } = cart.actions

export default cart.reducer