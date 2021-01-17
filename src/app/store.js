import { configureStore } from '@reduxjs/toolkit';
import cityReducer from '../features/city/citySlice';

export default configureStore({
  reducer: {
    city : cityReducer,
  },
});
