import { configureStore } from '@reduxjs/toolkit';
import { menuReduce } from '../features/menuSlice';

export const store = configureStore({
  reducer: { menu: menuReduce },
});
