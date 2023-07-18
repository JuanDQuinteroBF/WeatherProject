import { configureStore } from '@reduxjs/toolkit';
import cityReducer from './features/slice';
import asideReducer from './features/asideSlice'

const store = configureStore({
  reducer: {
    city: cityReducer,
    aside: asideReducer
  },
});

export type RootState = ReturnType<typeof store.getState>

export default store