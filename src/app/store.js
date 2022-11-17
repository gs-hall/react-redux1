import { configureStore } from '@reduxjs/toolkit';
import serviceListReducer from '../features/service/serviceListSlice';
import serviceFormReducer from '../features/service/serviceFormSlice';
import serviceSearchReducer from '../features/service/serviceSearchSlice';

export const store = configureStore({
  reducer: {
    serviceList: serviceListReducer,
    serviceForm: serviceFormReducer,
    serviceSearch: serviceSearchReducer
  },
});
