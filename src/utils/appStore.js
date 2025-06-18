import { configureStore } from '@reduxjs/toolkit';
//import the userReducer from the userslice
import useReducer from './userSlice';

const appStore = configureStore({
  reducer: useReducer,
});
export default appStore;
