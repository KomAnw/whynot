export type ThemeRequest = {
  userId: number;
  theme: string;
};

export type ThemeResponse = {
  theme: 'default' | 'other';
};
