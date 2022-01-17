import { createStore } from 'redux';

const initialCounter = {
  counter: 0,
};

const counterReducer = (state = initialCounter, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        counter: state.counter + 1,
      };
    case 'INCREASE':
      return {
        counter: state.counter + action.payload,
      };
    case 'DECREMENT':
      return {
        counter: state.counter - 1,
      };
    default:
      return initialCounter;
  }
};

const store = createStore(counterReducer);

export default store;
