import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getUser, singIn } from 'src/api/userAPI';

export type ID = string | number;

export interface ISignInData {
  login: string;
  password: string;
}

export interface IUser {
  id: ID;
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
  avatar: string;
}

export interface IUserState {
  isLoading: boolean;
  user: IUser | null;
  error: string | null;
}

const initialState: IUserState = {
  isLoading: false,
  user: null,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
  },
  extraReducers: {
    [singIn.fulfilled.type]: state => {
      state.isLoading = false;
      state.error = null;
    },
    [singIn.pending.type]: state => {
      state.isLoading = true;
    },
    [singIn.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [getUser.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
      state.isLoading = false;
      state.error = null;
      state.user = action.payload;
    },
    [getUser.pending.type]: state => {
      state.isLoading = true;
    },
    [getUser.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
      state.user = null;
    },
  },
});

export default userSlice.reducer;
