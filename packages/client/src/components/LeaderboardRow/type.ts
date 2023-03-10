export type LeaderboardRowProps = {
  rank: string;
  nickname: string;
  score: string;
  isMine?: boolean;
};

export type RowProps = Pick<LeaderboardRowProps, 'isMine'>;
