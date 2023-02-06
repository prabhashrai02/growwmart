import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '@/UI/ProductPage/Types';
import { ProductState } from './Types';
import { FilterData } from '@/Common/Filters/Types';
import { filterProductList } from '@/utils/filterList';

const initialState: ProductState = {
  productList: [],
  showList: [],
  searchValue: '',
}

export const product = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProductList: (state, action: PayloadAction<Product[]>) => {
      state.productList = action.payload;
      state.showList = action.payload;
    },
    updateShowList: (state, action: PayloadAction<FilterData>) => {
      const data = filterProductList(state.productList, action.payload);

      state.showList = data;
    },
    updateSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    }
  }
})

export const { setProductList, updateShowList, updateSearchValue } = product.actions

export default product.reducer