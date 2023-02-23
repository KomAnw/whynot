export type StoryProp = {
  id: number;
  text: string;
  image?: string;
};

export type TutorialProp = Omit<StoryProp, 'id'>;
