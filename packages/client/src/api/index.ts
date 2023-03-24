import type { FetchBaseQueryArgs } from '@reduxjs/toolkit/dist/query/fetchBaseQuery';
import 'src/utils/globalPolyfill';
import _fetch from 'isomorphic-fetch';

const getBaseURL = (baseURL: string) => new URL('', baseURL).href;

export const getYandexURL = (url: string) => new URL(url, getBaseURL('https://ya-praktikum.tech/api/v2/')).href;

export const apiSettings: FetchBaseQueryArgs = {
  baseUrl: getBaseURL('https://ya-praktikum.tech/api/v2'),
  fetchFn: _fetch,
  credentials: 'include',
  timeout: 5000,
};
