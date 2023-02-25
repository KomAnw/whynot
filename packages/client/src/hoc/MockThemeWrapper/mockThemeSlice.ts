import { createSlice } from '@reduxjs/toolkit';
import { mockThemes } from 'src/App/constants';
import { Theme } from './types';

const { default: defaultTheme, other } = mockThemes;
const initialState: Theme = defaultTheme;

export const mockThemeSlice = createSlice({
  name: 'mockTheme',
  initialState,
  reducers: {
    changeTheme: state => {
      return state.name === 'default' ? other : defaultTheme;
    },
  },
});

export const { changeTheme } = mockThemeSlice.actions;
export default mockThemeSlice.reducer;
