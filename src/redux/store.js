import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './featrures/searchSlice'
import collectionReducer from './featrures/collectionSlice'
export const store = configureStore({
  reducer: {
    search:searchReducer,
    collection:collectionReducer
  },
});