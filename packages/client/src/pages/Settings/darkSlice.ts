import { createSlice } from '@reduxjs/toolkit';

export const darkSlice = createSlice({
  name: 'dark',
  initialState: { switchOn: false },
  reducers: {
    switchToDarkTheme: (state, action) => {
      state.switchOn = action.payload;
    },
  },
});

export const { switchToDarkTheme } = darkSlice.actions;

export default darkSlice.reducer;
