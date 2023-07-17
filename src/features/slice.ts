import { createSlice, PayloadAction } from '@reduxjs/toolkit'


  export const citySlice = createSlice({
    name: 'city',
    initialState: {
        city: null,
      },
    reducers: {
      setCity: (state, action) => {
        state.city = action.payload;
    },
     
    },
  })

export const { setCity } = citySlice.actions;

export const selectUser = (state: { nameCity: { name: any; }; }) => state.nameCity.name;

export default citySlice.reducer;