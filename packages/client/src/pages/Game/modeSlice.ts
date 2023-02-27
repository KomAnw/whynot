import { createSlice } from '@reduxjs/toolkit';
import { sprites } from 'components/App/constants';

export const modeSlice = createSlice({
  name: 'mode',
  initialState: { sprite: sprites[0] },
  reducers: {
    changeMode: (state, action) => {
      state.sprite = action.payload;
    },
  },
});

export const { changeMode } = modeSlice.actions;

export default modeSlice.reducer;
