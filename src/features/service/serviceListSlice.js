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
    saveService: (state, action) => {
      console.log('saveService', action.payload);
      const { id, name, price } = action.payload;
      if (id !== undefined) { // edit
        const index = state.findIndex(item => item.id === id);
        state[index] = { id, name, price: Number(price) };
      } else { // new
        state.push({ id: nanoid(), name, price: Number(price) });
        // Thanks to redux we can mutate state!
        //return [...state, { id: nanoid(), name, price: Number(price) }];
      };
    },

    removeService: (state, action) => {
      const id = action.payload;
      return state.filter(service => service.id !== id);
    }
  }
});

export const { saveService, removeService } = serviceListSlice.actions;

export const selectServiceList = (state) => state.serviceList;

export default serviceListSlice.reducer;
