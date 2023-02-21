export type StoryProp = {
  image?: string;
  text: string;
  id: number;
};

export type TutorialProp = Omit<StoryProp, 'id'>;
