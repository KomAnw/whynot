import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiSettings } from 'src/api';
import { TSignInData, TSignUpData, TUser } from 'src/api/authAPI/models';

const ROOT_AUTH_URL = 'auth';

export const AUTH_ENDPOINTS = {
  user: `${ROOT_AUTH_URL}/user`,
  singIn: `${ROOT_AUTH_URL}/singIn`,
  singUp: `${ROOT_AUTH_URL}/singUp`,
  logout: `${ROOT_AUTH_URL}/logout`,
};

export const authApi = createApi({
  reducerPath: 'auth',
  baseQuery: fetchBaseQuery({
    ...apiSettings,
  }),
  tagTypes: ['User'],
  endpoints: build => ({
    getUser: build.query<TUser, void>({
      query: () => ({ url: AUTH_ENDPOINTS.user, method: 'GET' }),
      providesTags: () => ['User'],
    }),
    singIn: build.mutation<string, TSignInData>({
      query: signInData => ({ url: AUTH_ENDPOINTS.singIn, method: 'POST', body: signInData }),
      invalidatesTags: ['User'],
    }),
    singUp: build.mutation<TUser, TSignUpData>({
      query: signUpData => ({ url: AUTH_ENDPOINTS.singUp, method: 'POST', body: signUpData }),
      invalidatesTags: ['User'],
    }),
    logout: build.mutation<void, void>({
      query: () => ({ url: AUTH_ENDPOINTS.logout, method: 'POST' }),
      invalidatesTags: ['User'],
    }),
  }),
});

export const { useGetUserQuery, useSingUpMutation, useSingInMutation, useLogoutMutation } = authApi;
