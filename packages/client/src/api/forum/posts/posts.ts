import { getBackendURL } from 'src/api/common/utils/apiUtilts';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { backendAPISettings } from 'src/api';
import type {TGetPostsResponse, TPostByIdResponse,  TPostPostRequest} from "src/api/forum/posts/models";

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
  endpoints: build => ({
    getPosts: build.query<TGetPostsResponse, void>({
      query: () => ({ url: POSTS_ENDPOINTS.getPosts, method: 'GET' }),
    }),
    getPostById: build.query<TPostByIdResponse, number>({
      query: id => ({ url: `${POSTS_ENDPOINTS.getPosts}/${id}`, method: 'GET' }),
    }),
    postPost: build.mutation<string, TPostPostRequest>({
      query: data => ({ url: POSTS_ENDPOINTS.getPosts, method: 'POST', body: data }),
    }),
  }),
});

export const { useGetPostsQuery, useGetPostByIdQuery, usePostPostMutation } = postsApi;
