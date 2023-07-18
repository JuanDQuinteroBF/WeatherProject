import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store';


  export const citySlice = createSlice({
    name: 'city',
    initialState: {
        city: 'london',
      },
    reducers: {
      setCity: (state, action: PayloadAction<string>) => {
        state.city = action.payload;
    },
     
    },
  })

export const { setCity } = citySlice.actions;

export default citySlice.reducer;

export const selectCity = (state: RootState) => state.city.city;
