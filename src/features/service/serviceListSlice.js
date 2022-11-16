import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from "nanoid";

const initialState = [
  {id: nanoid(), name: 'Замена стекла', price: 21000},
  {id: nanoid(), name: 'Замена дисплея', price: 25000}
];


export const serviceListSlice = createSlice({
  name: 'serviceList',
  initialState,
  reducers: {
    addService: (state, action) => {
      const { name, price } = action.payload;
      return [...state, { id: nanoid(), name, price: Number(price) }];
    },
    removeService: (state, action) => {
      console.log('remove');
      const id = action.payload;
      console.log('remove', id);
      return state.filter(service => service.id !== id);
    }
  }
});

export const { addService, removeService } = serviceListSlice.actions;

export const selectServiceList = (state) => state.serviceList;

export default serviceListSlice.reducer;
