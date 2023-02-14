import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiSettings } from 'src/api';
import { TChangeData, TUser } from 'src/api/user/models';

const ROOT_USER_URL = 'user';

export const USER_ENDPOINTS = {
  profile: `${ROOT_USER_URL}/profile`,
  avatar: `${ROOT_USER_URL}/profile/avatar`,
  password: `${ROOT_USER_URL}/password`,
};
export const userApi = createApi({
  reducerPath: 'user',
  baseQuery: fetchBaseQuery({
    ...apiSettings,
  }),
  endpoints: build => ({
    changeProfile: build.mutation<TUser, TChangeData>({
      query: profileData => ({ url: USER_ENDPOINTS.profile, method: 'PUT', body: profileData }),
    }),
    changeAvatar: build.mutation<TUser, TChangeData>({
      query: avatarData => ({ url: USER_ENDPOINTS.avatar, method: 'PUT', body: avatarData }),
    }),
    changePassword: build.mutation<TUser, TChangeData>({
      query: passwordData => ({ url: USER_ENDPOINTS.password, method: 'PUT', body: passwordData }),
    }),
  }),
});

export const { useChangeProfileMutation, useChangeAvatarMutation, useChangePasswordMutation } = userApi;
