import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiSettings, getYandexURL } from 'src/api';
import type { LeaderboardNewLeaderRequest, LeaderboardRequest, LeadersResponse } from 'src/api/leaderboard/models';

const ROOT_LEADERBOARD_URL = 'leaderboard';

export const LEADERBOARD_TEAM_NAME = 'wn';

export const LEADERBOARD_ENDPOINTS = {
  add: getYandexURL(ROOT_LEADERBOARD_URL),
  getTeam: getYandexURL(`${ROOT_LEADERBOARD_URL}/${LEADERBOARD_TEAM_NAME}`),
};

export const leaderboardApi = createApi({
  reducerPath: 'leaderboard',
  baseQuery: fetchBaseQuery({
    ...apiSettings,
  }),
  endpoints: build => ({
    add: build.mutation<string, LeaderboardNewLeaderRequest>({
      query: payload => {
        return {
          url: LEADERBOARD_ENDPOINTS.add,
          method: 'POST',
          body: payload,
          responseHandler: 'text',
        };
      },
    }),
    getTeamLeaderboard: build.mutation<LeadersResponse, LeaderboardRequest>({
      query: payload => {
        return {
          url: LEADERBOARD_ENDPOINTS.getTeam,
          method: 'POST',
          body: payload,
        };
      },
    }),
  }),
});

export const { useAddMutation, useGetTeamLeaderboardMutation } = leaderboardApi;
