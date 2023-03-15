import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { apiSettings } from 'src/api';
import { TOAuthData, TServiceId } from './models';

const ROOT_OAUTH_URL = 'oauth';

export const OAUTH_ENDPOINTS = {
  oauth: `${ROOT_OAUTH_URL}/yandex`,
  service: `${ROOT_OAUTH_URL}/yandex/service-id`,
};

export const REDIRECT_URL = 'http://localhost:3000/oauth';

export const redirectToOAuthYandex = (serviceId: string) => {
  window.location.href = `https://oauth.yandex.ru/authorize?response_type=code&client_id=${serviceId}&redirect_uri=${REDIRECT_URL}`;
};

export const oauthApi = createApi({
  reducerPath: 'oauth',
  baseQuery: fetchBaseQuery({
    ...apiSettings,
  }),
  endpoints: build => ({
    getServiceId: build.query<TServiceId, void>({
      query: () => ({
        url: `${OAUTH_ENDPOINTS.service}`,
        method: 'GET',
        params: { redirect_uri: REDIRECT_URL },
      }),
    }),
    yandexOAuth: build.mutation<string, TOAuthData>({
      query: oauthData => ({ url: OAUTH_ENDPOINTS.oauth, method: 'POST', body: oauthData, responseHandler: 'text' }),
    }),
  }),
});

export const { useLazyGetServiceIdQuery, useYandexOAuthMutation } = oauthApi;
