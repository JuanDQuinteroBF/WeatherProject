import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store';


  export const asideSlice = createSlice({
    name: 'aside',
    initialState: {
        open: false
    },
    reducers: {
      setOpen: (state, action: PayloadAction<boolean>) => {
        state.open = action.payload;
    },
     
    },
  })

export const { setOpen } = asideSlice.actions;

export default asideSlice.reducer;

export const selectedOpen = (state: RootState) => state.aside;
