import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  counter: 0,
  showCounter: true,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    increment(state) {
      state.counter += 1;
    },

    increase(state, action) {
      state.counter += action.payload;
    },

    decrement(state) {
      state.counter -= 1;
    },

    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const store = configureStore({
  reducer: counterSlice.reducer,
});

export default store;
