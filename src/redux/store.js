import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './featrures/searchSlice'
export const store = configureStore({
  reducer: {
    search:searchReducer,
  },
});