export type LeaderboardRowProps = {
  rank: number;
  nickname: string;
  score: number;
  isMine?: boolean;
};

export type RowProps = Pick<LeaderboardRowProps, 'isMine'>;
