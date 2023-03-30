import { createSlice } from '@reduxjs/toolkit';

export const soundSlice = createSlice({
  name: 'sound',
  initialState: { soundOn: false },
  reducers: {
    soundSwitchOn: (state, action) => {
      state.soundOn = action.payload;
    },
  },
});

export const { soundSwitchOn } = soundSlice.actions;

export default soundSlice.reducer;
