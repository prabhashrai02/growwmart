import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '@/UI/ProductPage/Types';
import { WishState } from './Types';

const initialState: WishState = {
  wishList: [],
}

export const wish = createSlice({
  name: 'wish',
  initialState,
  reducers: {
    updateWishList: (state, action: PayloadAction<Product>) => {

      const itemInWishList = state.wishList.find(item => item.id === action.payload.id);

      if (itemInWishList) {
        state.wishList = state.wishList.filter((item) => item !== itemInWishList);
      }
      else {
        state.wishList.push(action.payload);
      }
    },
    setWishList: (state, action: PayloadAction<Product[]>) => {
      state.wishList = action.payload;
    },
  }
})

export const { updateWishList, setWishList } = wish.actions

export default wish.reducer