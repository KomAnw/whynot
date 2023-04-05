export type ModeResponse = Mode[];

export type Mode = {
  data: {
    userId: number;
    mode: string;
  };
};

export type ModeRequest = {
  userId: number;
  mode: string;
};
