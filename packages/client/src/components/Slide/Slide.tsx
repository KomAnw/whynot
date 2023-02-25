import { Text } from 'src/design/Text';
import styled, { css } from 'styled-components';
import { StoryProp, TutorialProp } from './types';

export const SlideHistory = ({ image, text, id }: StoryProp) => {
  return (
    <SlideContainer>
      {image && <Character src={image} elementId={id} />}
      <StyledText>{text}</StyledText>
    </SlideContainer>
  );
};

const Character = styled('img')<{ elementId: number }>`
  width: 100px;
  ${({ elementId }) =>
    elementId % 2 === 0
      ? css`
          float: left;
          margin-right: 10px;
        `
      : css`
          float: right;
          margin-left: 10px;
        `}
`;

const SlideContainer = styled('div')`
  width: 100%;
  height: 100%;
`;

const StyledText = styled(Text)`
  color: ${({ theme }) => theme.colors.core.text.quinary};
`;

export const SlideTutorial = ({ image, text }: TutorialProp) => {
  return (
    <SlideTutorialContainer>
      <SlideTutorialStyledText>{text}</SlideTutorialStyledText>
      {image && <Image src={image} />}
    </SlideTutorialContainer>
  );
};

const SlideTutorialContainer = styled(SlideContainer)`
  display: grid;
  justify-items: center;
`;

const SlideTutorialStyledText = styled(StyledText)`
  text-align: center;
  max-width: 60%;
`;

const Image = styled('img')`
  width: max-content;
`;
