import { createAsyncThunk } from '@reduxjs/toolkit';
import { ISignInData } from 'src/store/reducers/userSlice';
import { api } from 'src/api';

export const getUser = createAsyncThunk('auth/user', async (_, { rejectWithValue }) => {
  try {
    return await api.get('auth/user').json();
  } catch (error: unknown) {
    return error instanceof Error ? rejectWithValue(error.message) : rejectWithValue('Something went wrong');
  }
});

export const singIn = createAsyncThunk('auth/signin', async (data: ISignInData, { rejectWithValue, dispatch }) => {
  try {
    const result = await api.post('auth/signin', { json: data });

    if (result) {
      await dispatch(getUser());
    }
  } catch (error: unknown) {
    return error instanceof Error ? rejectWithValue(error.message) : rejectWithValue('Something went wrong');
  }
});
