import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { yandexApiSettings } from 'src/api';
import type { Theme, ThemeRequest } from 'src/api/theme/models';
import { getURL } from 'src/api/common/utils/apiUtilts';

const ROOT_THEME_URL = 'theme';

export const THEME_ENDPOINTS = {
  add: getURL(ROOT_THEME_URL),
  get: getURL(`${ROOT_THEME_URL}/`),
};

export const themeApi = createApi({
  reducerPath: 'theme',
  baseQuery: fetchBaseQuery({
    ...yandexApiSettings,
  }),
  endpoints: build => ({
    add: build.mutation<string, ThemeRequest>({
      query: payload => {
        return {
          url: THEME_ENDPOINTS.add,
          method: 'POST',
          body: payload,
          responseHandler: 'text',
        };
      },
    }),
    get: build.query<Theme, void>({
      query: () => ({
        url: THEME_ENDPOINTS.get,
        method: 'GET',
      }),
    }),
  }),
});

export const { useAddMutation, useGetQuery } = themeApi;
