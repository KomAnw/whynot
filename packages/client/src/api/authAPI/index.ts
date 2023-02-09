import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiSettings } from 'src/api';
import { TSignInData, TSignUpData, TUser } from 'src/api/authAPI/models';

export const authApi = createApi({
  reducerPath: 'auth',
  baseQuery: fetchBaseQuery({
    ...apiSettings,
  }),
  tagTypes: ['User'],
  endpoints: build => ({
    getUser: build.query<TUser, void>({
      query: () => ({ url: 'auth/user', method: 'GET' }),
      providesTags: () => ['User'],
    }),
    singIn: build.mutation<string, TSignInData>({
      query: signInData => ({ url: 'auth/signin', method: 'POST', body: signInData }),
      invalidatesTags: ['User'],
    }),
    singUp: build.mutation<TUser, TSignUpData>({
      query: signUpData => ({ url: 'auth/signup', method: 'POST', body: signUpData }),
      invalidatesTags: ['User'],
    }),
    logout: build.mutation<void, void>({
      query: () => ({ url: 'auth/logout', method: 'POST' }),
      invalidatesTags: ['User'],
    }),
  }),
});

export const { useGetUserQuery, useSingUpMutation, useSingInMutation, useLogoutMutation } = authApi;
