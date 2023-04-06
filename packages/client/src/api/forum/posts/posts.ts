import { getBackendURL } from 'src/api/common/utils/apiUtilts';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { backendAPISettings } from 'src/api';
import type { TPost } from 'src/api/forum/posts/models';

const ROOT_POSTS_URL = 'posts';

export const POSTS_ENDPOINTS = {
  getPosts: getBackendURL(`${ROOT_POSTS_URL}`),
  getPostById: getBackendURL(`${ROOT_POSTS_URL}`),
  postPost: getBackendURL(`${ROOT_POSTS_URL}`),
};
export const postsApi = createApi({
  reducerPath: 'posts',
  baseQuery: fetchBaseQuery({
    ...backendAPISettings,
  }),
  tagTypes: ['Posts'],
  endpoints: build => ({
    getPosts: build.query<TPost[], void>({
      query: () => ({ url: POSTS_ENDPOINTS.getPosts, method: 'GET' }),
      providesTags: ['Posts'],
    }),
    getPostById: build.query<TPost, number>({
      query: id => ({ url: `${POSTS_ENDPOINTS.getPosts}/${id}`, method: 'GET' }),
    }),
    postPost: build.mutation<string, TPost>({
      query: data => ({ url: POSTS_ENDPOINTS.getPosts, method: 'POST', body: data }),
    }),
  }),
});

export const { useGetPostsQuery, useGetPostByIdQuery, usePostPostMutation } = postsApi;
