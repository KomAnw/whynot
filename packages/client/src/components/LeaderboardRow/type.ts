export type LeaderboardRowProps = {
  rank: number;
  nickname: string;
  score: string;
  isMine?: boolean;
};

export type RowProps = Pick<LeaderboardRowProps, 'isMine'>;
