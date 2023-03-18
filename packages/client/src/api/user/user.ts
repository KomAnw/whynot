import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiSettings, getYandexURL } from 'src/api';
import { TChangeProfileRequest, TPasswordRequest } from 'src/api/user/models';
import { TUser } from '../auth/models';

const ROOT_USER_URL = 'user';

export const USER_ENDPOINTS = {
  profile: getYandexURL(`${ROOT_USER_URL}/profile`),
  avatar: getYandexURL(`${ROOT_USER_URL}/profile/avatar`),
  password: getYandexURL(`${ROOT_USER_URL}/password`),
};
export const userApi = createApi({
  reducerPath: 'user',
  baseQuery: fetchBaseQuery({
    ...apiSettings,
  }),
  endpoints: build => ({
    changeProfile: build.mutation<TUser, TChangeProfileRequest>({
      query: profileData => ({ url: USER_ENDPOINTS.profile, method: 'PUT', body: profileData }),
    }),
    changeAvatar: build.mutation<TUser, FormData>({
      query: avatarData => ({ url: USER_ENDPOINTS.avatar, method: 'PUT', body: avatarData }),
    }),
    changePassword: build.mutation<string, TPasswordRequest>({
      query: passwordData => ({
        url: USER_ENDPOINTS.password,
        method: 'PUT',
        body: passwordData,
        responseHandler: 'text',
      }),
    }),
  }),
});

export const { useChangeProfileMutation, useChangeAvatarMutation, useChangePasswordMutation } = userApi;
