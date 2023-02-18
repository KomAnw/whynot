import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiSettings } from 'src/api';
import { TSignInRequest, TSignUpResponse, TSignUpRequest, TUser } from 'src/api/auth/models';

const ROOT_AUTH_URL = 'auth';

export const AUTH_ENDPOINTS = {
  user: `${ROOT_AUTH_URL}/user`,
  singIn: `${ROOT_AUTH_URL}/signin`,
  singUp: `${ROOT_AUTH_URL}/signup`,
  logout: `${ROOT_AUTH_URL}/logout`,
};
export const authApi = createApi({
  reducerPath: 'auth',
  baseQuery: fetchBaseQuery({
    ...apiSettings,
  }),
  endpoints: build => ({
    getUser: build.query<TUser, void>({
      query: () => ({ url: AUTH_ENDPOINTS.user, method: 'GET' }),
    }),
    singIn: build.mutation<string, TSignInRequest>({
      query: signInData => ({ url: AUTH_ENDPOINTS.singIn, method: 'POST', body: signInData, responseHandler: 'text' }),
    }),
    singUp: build.mutation<TSignUpResponse, TSignUpRequest>({
      query: signUpData => ({ url: AUTH_ENDPOINTS.singUp, method: 'POST', body: signUpData }),
    }),
    logout: build.mutation<string, void>({
      query: () => ({ url: AUTH_ENDPOINTS.logout, method: 'POST', responseHandler: 'text' }),
    }),
  }),
});

export const { useGetUserQuery, useSingUpMutation, useSingInMutation, useLogoutMutation } = authApi;
