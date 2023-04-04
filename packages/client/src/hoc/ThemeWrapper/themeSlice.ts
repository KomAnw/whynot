import { createSlice } from '@reduxjs/toolkit';
import { themes } from 'src/components/App/constants';
import type { Theme } from './types';

const { default: defaultTheme, other } = themes;
const initialState: Theme = defaultTheme;

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: state => {
      console.log(state.name);

      return state.name === 'default' ? other : defaultTheme;
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
