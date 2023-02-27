import { createSlice } from '@reduxjs/toolkit';

export const fullscreenSlice = createSlice({
  name: 'fullscreen',
  initialState: { switchOn: false },
  reducers: {
    switchToFullScreen: (state, action) => {
      state.switchOn = action.payload;
    },
  },
});

export const { switchToFullScreen } = fullscreenSlice.actions;

export default fullscreenSlice.reducer;
