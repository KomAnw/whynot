import { FetchBaseQueryArgs } from '@reduxjs/toolkit/dist/query/fetchBaseQuery';

export const apiSettings: FetchBaseQueryArgs = {
  baseUrl: 'https://ya-praktikum.tech/api/v2',
  credentials: 'include',
  timeout: 5000,
};
