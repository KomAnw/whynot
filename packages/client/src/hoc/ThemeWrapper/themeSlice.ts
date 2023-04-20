import { createSlice } from '@reduxjs/toolkit';
import { themes } from 'src/components/App/constants';
import { getTheme } from 'src/api/theme/theme';
import type { Theme } from './types';

const { default: defaultTheme, other } = themes;
const initialState: Theme = defaultTheme;

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: state => {
      return state.name === 'default' ? other : defaultTheme;
    },
    changeToInitialTheme: () => {
      return initialState;
    },
  },
  extraReducers: builder => {
    builder.addCase(getTheme.fulfilled, (state, action) => {
      const currentTheme = action.payload;

      if (currentTheme) {
        state.name = themes[currentTheme].name;
        state.colors = themes[currentTheme].colors;
        state.fonts = themes[currentTheme].fonts;
      }
    });
  },
});

export const { changeTheme, changeToInitialTheme } = themeSlice.actions;
export default themeSlice.reducer;
