import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartState, Product } from '@/utils/Types'

const initialState: CartState = {
  value: 0,
  products: [],
}

export const cart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const itemInCart = state.products.find(item => item.product.id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantity++;
      }
      else {
        state.products.push({product: action.payload, quantity: 1});
      }

      let total: number = 0;
      state.products.forEach(product => {
        total += product.quantity;
      })

      state.value = total;
    },
    setData: (state, action: PayloadAction<CartState>) => {
      state.value = action.payload.value;
      state.products = action.payload.products;
    }
  }
})

export const { addToCart, setData } = cart.actions

export default cart.reducer