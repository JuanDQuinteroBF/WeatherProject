import { configureStore } from '@reduxjs/toolkit';
import cityReducer from './slice';

export default configureStore({
  reducer: {
    city: cityReducer,
  },
});