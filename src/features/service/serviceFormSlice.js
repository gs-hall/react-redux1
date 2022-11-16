import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  price: ''
};

export const serviceFormSlice = createSlice({
  name: 'serviceForm',
  initialState,
  reducers: {
    changeServiceField: (state, action) => {
      console.log(action);
      const {name, value} = action.payload;
      return {...state, [name]: value};
    },
  }
});

export const { changeServiceField } = serviceFormSlice.actions;

export const selectServiceForm = (state) => state.serviceForm;

export default serviceFormSlice.reducer;
