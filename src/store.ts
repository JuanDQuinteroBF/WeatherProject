import { configureStore } from '@reduxjs/toolkit';
import asideReducer from './features/asideSlice'

const store = configureStore({
  reducer: {
    aside: asideReducer
  },
});

export type RootState = ReturnType<typeof store.getState>

export default store