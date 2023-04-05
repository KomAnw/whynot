export type ThemesResponse = Theme[];

export type Theme = {
  data: {
    userId: number;
    theme: string;
  };
};

export type ThemeRequest = {
  userId: number;
  theme: string;
};
