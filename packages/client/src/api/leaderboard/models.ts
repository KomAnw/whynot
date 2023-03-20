export type LeadersResponse = Leader[];

export type Leader = {
  data: {
    score: number;
    user_id: number;
    first_name: string;
  };
};

export type LeaderboardNewLeaderRequest = Leader & {
  ratingFieldName: string;
  teamName: string;
};

export type LeaderboardRequest = {
  ratingFieldName: string;
  cursor: number;
  limit: number;
};
