import { createStore } from 'redux';

const initialState = {
  counter: 0,
  showCounter: true,
};

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
