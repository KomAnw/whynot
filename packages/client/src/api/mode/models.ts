export type TMode = 'Doodle' | 'Mario' | 'Homer';

export type ModeRequest = {
  userId: number;
  mode: TMode;
};

export type ModeResponse = ModeRequest;
