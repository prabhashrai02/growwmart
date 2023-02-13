import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '@/UI/ProductPage/Types';
import { ProductState } from './Types';

const initialState: ProductState = {
  productList: [],
  searchValue: '',
  categories: []
}

export const product = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setCategoriesList: (state, action: PayloadAction<string[]>) => {
      state.categories = action.payload;
    },
    setProductList: (state, action: PayloadAction<Product[]>) => {
      state.productList = action.payload;
    },
    updateSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    }
  }
})

export const { setCategoriesList, setProductList, updateSearchValue } = product.actions

export default product.reducer