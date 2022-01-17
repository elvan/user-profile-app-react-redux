import { createSlice } from '@reduxjs/toolkit';

const initialCounter = {
  value: 0,
  showCounter: true,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounter,
  reducers: {
    increment(state) {
      state.value += 1;
    },

    increase(state, action) {
      state.value += action.payload;
    },

    decrement(state) {
      state.value -= 1;
    },

    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const { increment, increase, decrement, toggleCounter } =
  counterSlice.actions;

export default counterSlice;
