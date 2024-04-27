import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import quizziesReducer from './quizziesSlice';

const Store = configureStore({
  reducer: {
    auth: authReducer,
    quizzies:quizziesReducer,
  }
});

export default Store;
