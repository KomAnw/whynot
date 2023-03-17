export type LeadersResponse = {
  data: {
    score: number;
    user_id: number;
    first_name: string;
  };
};

export type LeaderboardNewLeaderRequest = LeadersResponse & {
  ratingFieldName: string;
  teamName: string;
};

export type LeaderboardRequest = {
  ratingFieldName: string;
  cursor: number;
  limit: number;
};
