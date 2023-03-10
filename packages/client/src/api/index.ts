import { FetchBaseQueryArgs } from '@reduxjs/toolkit/dist/query/fetchBaseQuery';

const getBaseURL = (baseURL: string) => new URL('', baseURL).href;

export const apiSettings: FetchBaseQueryArgs = {
  baseUrl: getBaseURL('https://ya-praktikum.tech/api/v2'),
  credentials: 'include',
  timeout: 5000,
};
