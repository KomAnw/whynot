import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { backendAPISettings } from 'src/api';
import type { Mode, ModeRequest } from 'src/api/mode/models';
import { getBackendURL } from 'src/api/common/utils/apiUtilts';

const ROOT_MODE_URL = 'mode';

export const MODE_ENDPOINTS = {
  add: getBackendURL(ROOT_MODE_URL),
  update: getBackendURL(ROOT_MODE_URL),
  get: getBackendURL(ROOT_MODE_URL),
};

export const modeApi = createApi({
  reducerPath: 'mode',
  baseQuery: fetchBaseQuery({
    ...backendAPISettings,
  }),
  endpoints: build => ({
    addMode: build.mutation<string, ModeRequest>({
      query: payload => {
        return {
          url: MODE_ENDPOINTS.add,
          method: 'POST',
          body: payload,
          responseHandler: 'text',
        };
      },
    }),
    updateMode: build.mutation<string, ModeRequest>({
      query: payload => {
        return {
          url: MODE_ENDPOINTS.update,
          method: 'PUT',
          body: payload,
          responseHandler: 'text',
        };
      },
    }),
    getMode: build.query<Mode, number>({
      query: userId => ({
        url: `${MODE_ENDPOINTS.get}/${userId}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useAddModeMutation, useUpdateModeMutation, useGetModeQuery } = modeApi;
