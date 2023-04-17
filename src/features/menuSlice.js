import { createSlice } from '@reduxjs/toolkit';

const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    isMenu: false,
  },
  reducers: {
    handleMenu: (state, action) => {
      state.isMenu = action.payload;
    },
  },
});

export const menuReduce = menuSlice.reducer;
export const { handleMenu } = menuSlice.actions;
