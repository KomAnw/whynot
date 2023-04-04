type TPost = {
  id?: number;
  text: string;
  authorId: number;
  login: string;
  date: Date;
};

export type TGetPostsResponse = TPost[];

export type TPostByIdResponse = TPost;

export type TPostPostRequest = TPost;
