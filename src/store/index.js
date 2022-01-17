import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  showCounter: true,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialState,
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

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export const { increment, increase, decrement, toggleCounter } =
  counterSlice.actions;

export default store;
