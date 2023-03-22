import { createSlice } from '@reduxjs/toolkit';
import type { TSprite } from '../../../src/pages/Game/types/types';
import { sprites } from '../../../src/components/App/constants';

export const modeSlice = createSlice({
  name: 'mode',
  initialState: { sprite: sprites[0] as TSprite },
  reducers: {
    changeMode: (state, action) => {
      state.sprite = action.payload;
    },
  },
});

export const { changeMode } = modeSlice.actions;

export default modeSlice.reducer;
