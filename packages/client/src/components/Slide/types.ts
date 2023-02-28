export type StoryProp = {
  id: number;
  text: string;
  imageCase?: string;
};

export type TutorialProp = Omit<StoryProp, 'id'>;
