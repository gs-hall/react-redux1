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
      console.log('changeServiceField', action.payload);
      const {name, value} = action.payload;
      state[name] = value;
    },
    setServiceForm: (state, action) => {
      console.log('setServiceForm', action.payload);
      return action.payload;
    },
    clearServiceForm: (state) => {
      return initialState;
    }
  }
});

export const { changeServiceField, setServiceForm, clearServiceForm } = serviceFormSlice.actions;

export const selectServiceForm = (state) => state.serviceForm;

export default serviceFormSlice.reducer;
