import { createSlice } from '@reduxjs/toolkit';
import { createStore } from 'redux';

const initialState = {
  counter: 0,
  showCounter: true,
};

createSlice({
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

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        counter: state.counter + 1,
      };
    case 'INCREASE':
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    case 'DECREMENT':
      return {
        ...state,
        counter: state.counter - 1,
      };
    case 'TOGGLE_COUNTER':
      return {
        ...state,
        showCounter: !state.showCounter,
      };
    default:
      return initialState;
  }
};

const store = createStore(counterReducer);

export default store;
