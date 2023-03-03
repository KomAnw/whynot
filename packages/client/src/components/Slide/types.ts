export type StoryProp = {
  id: number;
  text: string;
  imageCase: string;
};

export type TutorialProp = Omit<StoryProp, 'id'>;

type SpriteProps = {
  name: string;
  sprite: string;
  background: string;
};

export type SlideDataRenderProps = {
  imageCase: string;
  sprite: SpriteProps;
  id?: number;
};
