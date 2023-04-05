import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { backendAPISettings } from 'src/api';
import type { Theme, ThemeRequest } from 'src/api/theme/models';
import { getBackendURL } from 'src/api/common/utils/apiUtilts';

const ROOT_THEME_URL = 'theme';

export const THEME_ENDPOINTS = {
  add: getBackendURL(ROOT_THEME_URL),
  update: getBackendURL(ROOT_THEME_URL),
  get: getBackendURL(ROOT_THEME_URL),
};

export const themeApi = createApi({
  reducerPath: 'theme',
  baseQuery: fetchBaseQuery({
    ...backendAPISettings,
  }),
  endpoints: build => ({
    addTheme: build.mutation<string, ThemeRequest>({
      query: payload => {
        return {
          url: THEME_ENDPOINTS.add,
          method: 'POST',
          body: payload,
          responseHandler: 'text',
        };
      },
    }),
    updateTheme: build.mutation<string, ThemeRequest>({
      query: payload => {
        return {
          url: THEME_ENDPOINTS.update,
          method: 'PUT',
          body: payload,
          responseHandler: 'text',
        };
      },
    }),
    getTheme: build.query<Theme, number>({
      query: userId => ({
        url: `${THEME_ENDPOINTS.get}/${userId}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useAddThemeMutation, useUpdateThemeMutation, useGetThemeQuery } = themeApi;
