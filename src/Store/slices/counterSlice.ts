import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { CounterState } from '../../utils/Types'

const initialState: CounterState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'cartSize',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
    setValue: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    }
  }
})

export const { increment, decrement, incrementByAmount, setValue } = counterSlice.actions

export default counterSlice.reducer