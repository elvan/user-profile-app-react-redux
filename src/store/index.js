import { configureStore, createSlice } from '@reduxjs/toolkit';

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

const initialAuth = {
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuth,
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },

    logout(state) {
      state.isLoggedIn = false;
    },
  },
});

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});

export const { increment, increase, decrement, toggleCounter } =
  counterSlice.actions;

export const { login, logout } = authSlice.actions;

export default store;
