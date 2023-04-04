import type { FetchBaseQueryArgs } from '@reduxjs/toolkit/dist/query/fetchBaseQuery';
import 'src/utils/globalPolyfill';
import _fetch from 'isomorphic-fetch';
import { BACKEND_API_URL, YANDEX_API_URL } from 'src/api/common/consts/apiConsts';

const apiSettings: FetchBaseQueryArgs = {
  fetchFn: _fetch,
  credentials: 'include',
  timeout: 5000,
};

export const yandexApiSettings: FetchBaseQueryArgs = {
  ...apiSettings,
  baseUrl: YANDEX_API_URL,
};

export const backendAPISettings: FetchBaseQueryArgs = {
  ...apiSettings,
  baseUrl: BACKEND_API_URL,
};
