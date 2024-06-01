import {createSlice} from '@reduxjs/toolkit';

export const colorsSlice = createSlice({
  name: 'colors',
  initialState: ['green'],
  reducers: {},
});

export const {} = colorsSlice.actions;

export default colorsSlice.reducer;
