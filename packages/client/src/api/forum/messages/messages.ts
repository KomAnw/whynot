import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getBackendURL } from 'src/api/common/utils/apiUtilts';
import { backendAPISettings } from 'src/api';
import type { TPostEmojiRequest } from 'src/api/forum/messages/models';
import type { TMessage } from 'src/api/forum/messages/models';

const ROOT_MESSAGES_URL = 'messages';

export const MESSAGES_ENDPOINTS = {
  getMessagesByPostId: getBackendURL(`${ROOT_MESSAGES_URL}`),
  postMessage: getBackendURL(`${ROOT_MESSAGES_URL}`),
  postEmoji: getBackendURL(`${ROOT_MESSAGES_URL}/emoji`),
};

export const messagesApi = createApi({
  reducerPath: 'messages',
  baseQuery: fetchBaseQuery({
    ...backendAPISettings,
  }),
  endpoints: build => ({
    getMessagesByPostId: build.query<TMessage[], number>({
      query: postId => ({ url: `${MESSAGES_ENDPOINTS.getMessagesByPostId}?postId=${postId}`, method: 'GET' }),
    }),
    postMessage: build.mutation<string, TMessage>({
      query: data => ({ url: MESSAGES_ENDPOINTS.postMessage, method: 'POST', body: data }),
    }),
    postEmoji: build.mutation<string, TPostEmojiRequest>({
      query: data => ({ url: MESSAGES_ENDPOINTS.postEmoji, method: 'POST', body: data }),
    }),
  }),
});

export const { useGetMessagesByPostIdQuery, usePostMessageMutation, usePostEmojiMutation } = messagesApi;
