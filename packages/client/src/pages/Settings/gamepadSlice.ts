import { createSlice } from '@reduxjs/toolkit';

export const gamepadSlice = createSlice({
  name: 'gamepad',
  initialState: { gamepadOn: false },
  reducers: {
    switchToGamepad: (state, action) => {
      state.gamepadOn = action.payload;
    },
  },
});

export const { switchToGamepad } = gamepadSlice.actions;

export default gamepadSlice.reducer;
