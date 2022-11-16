import { configureStore } from '@reduxjs/toolkit';
import serviceListReducer from '../features/service/serviceListSlice';
import serviceFormReducer from '../features/service/serviceFormSlice';

export const store = configureStore({
  reducer: {
    serviceList: serviceListReducer,
    serviceForm: serviceFormReducer,
  },
});
