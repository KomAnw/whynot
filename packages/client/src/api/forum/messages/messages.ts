import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getBackendURL } from 'src/api/common/utils/apiUtilts';
import { backendAPISettings } from 'src/api';
import type { TGetMessagesByPostIdResponse, TPostMessageRequest } from 'src/api/forum/messages/models';

const ROOT_MESSAGES_URL = 'messages';

export const MESSAGES_ENDPOINTS = {
  getMessagesByPostId: getBackendURL(`${ROOT_MESSAGES_URL}`),
  postMessage: getBackendURL(`${ROOT_MESSAGES_URL}`),
};

export const messagesApi = createApi({
  reducerPath: 'messages',
  baseQuery: fetchBaseQuery({
    ...backendAPISettings,
  }),
  endpoints: build => ({
    getMessagesByPostId: build.query<TGetMessagesByPostIdResponse, number>({
      query: postId => ({ url: `${MESSAGES_ENDPOINTS.getMessagesByPostId}?postId=${postId}`, method: 'GET' }),
    }),
    postMessage: build.mutation<string, TPostMessageRequest>({
      query: data => ({ url: MESSAGES_ENDPOINTS.postMessage, method: 'POST', body: data }),
    }),
  }),
});

export const { useGetMessagesByPostIdQuery, usePostMessageMutation } = messagesApi;
