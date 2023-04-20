import { createSlice } from '@reduxjs/toolkit';
import type { TSprite } from 'src/pages/Game/types/types';
import { sprites } from 'src/components/App/constants';
import { getMode } from 'src/api/mode/mode';

const initialState = { sprite: sprites[0] as TSprite };

export const modeSlice = createSlice({
  name: 'mode',
  initialState,
  reducers: {
    changeMode: (state, action) => {
      state.sprite = action.payload;
    },
    changeToInitialMode: () => {
      return initialState;
    },
  },
  extraReducers: builder => {
    builder.addCase(getMode.fulfilled, (state, action) => {
      const currentMode = action.payload;
      const mode = sprites.find(item => item.name === currentMode);

      if (mode) {
        state.sprite.name = mode.name;
        state.sprite.sprite = mode.sprite;
        state.sprite.background = mode.background;
        state.sprite.gameOverImage = mode.gameOverImage;
      }
    });
  },
});

export const { changeMode, changeToInitialMode } = modeSlice.actions;

export default modeSlice.reducer;
