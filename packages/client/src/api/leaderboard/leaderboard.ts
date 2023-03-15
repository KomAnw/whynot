import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiSettings } from 'src/api';
import { LEADERBOARD_TEAM_NAME } from 'src/api/leaderboard/models';

const ROOT_LEADERBOARD_URL = '/leaderboard';

export const LEADERBOARD_ENDPOINTS = {
  add: ROOT_LEADERBOARD_URL,
  getTeam: `${ROOT_LEADERBOARD_URL}/${LEADERBOARD_TEAM_NAME}`,
};

function jsonTextResponseHandler(response: Response) {
  return response.status === 200 ? response.json() : response.text();
}

export const leaderboardApi = createApi({
  reducerPath: 'leaderboardAPI',
  baseQuery: fetchBaseQuery({
    ...apiSettings,
  }),
  endpoints: build => ({
    // todo: переделать
    add: build.mutation<any, any>({
      query: payload => {
        return {
          url: LEADERBOARD_ENDPOINTS.add,
          method: 'POST',
          body: payload,
          responseHandler: jsonTextResponseHandler,
        };
      },
    }),
    // todo: переделать

    /*
     * getTeamLeaderboard: build.query<any, any>({
     *   query: payload => {
     *     return {
     *       url: LEADERBOARD_ENDPOINTS.getTeam,
     *       method: 'POST',
     *       body: payload,
     *       responseHandler: jsonTextResponseHandler,
     *     };
     *   },
     * }),
     */
    getLeaderboard: build.mutation({
      query: () => ({
        url: LEADERBOARD_ENDPOINTS.getTeam,
        method: 'POST',
        body: {
          ratingFieldName: 'score',
          cursor: 0,
          limit: 100,
        },
      }),
    }),
  }),
});

export const { useAddMutation, useGetLeaderboardMutation } = leaderboardApi;
