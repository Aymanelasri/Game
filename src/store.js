import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from './Gestion/GestionSlice';
import materialReducer from './Material/MaterialSlice';

const store = configureStore({
  reducer: {
    employee: employeeReducer,
    material: materialReducer,
  }
});

export default store;
