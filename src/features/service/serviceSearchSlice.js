import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

export const serviceSearchSlice = createSlice({
  name: 'serviceSearch',
  initialState,
  reducers: {
    changeSearchField: (state, action) => {
      return action.payload;
    }
  }
});

export const { changeSearchField } = serviceSearchSlice.actions;

export const selectServiceSearch = (state) => state.serviceSearch;

export default serviceSearchSlice.reducer;
