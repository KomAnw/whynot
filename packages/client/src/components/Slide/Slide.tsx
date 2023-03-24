import { Text } from 'src/design/Text';
import styled, { css } from 'styled-components';
import { useAppSelector } from 'src/hooks/redux';
import { Link } from 'components/Link';
import { paths } from 'components/App/constants';
import { imageCases } from 'pages/Tutorial/slides/constants';
import type { SlideDataRenderProps, StoryProp, TutorialProp } from './types';

const { settings } = paths;
const fairyCastle = '/images/tutorial/fairyCastle.png';

const slideDataRender = ({ imageCase, sprite, id }: SlideDataRenderProps) => {
  switch (imageCase) {
    case imageCases.hero:
      return <ImgHero src={sprite.sprite} elementId={id!} />;

    case imageCases.fairycastle:
      return <Character src={fairyCastle} elementId={id!} />;

    case imageCases.platform1:
      return <ImgPlatform1 src={sprite.sprite} elementId={id!} />;

    case imageCases.platform2:
      return <ImgPlatform2 src={sprite.sprite} elementId={id!} />;

    case imageCases.control:
      return (
        <Control>
          <ImgControlLeft src={sprite.sprite} />
          <ImgControlRight src={sprite.sprite} />
        </Control>
      );
    case imageCases.settings:
      return (
        <SettingsSlide>
          <ImgSprite src={sprite.sprite} />
          <SlideTutorialStyledText>{sprite.name}</SlideTutorialStyledText>
          <Link to={settings} variant="size24">
            Go to Settings
          </Link>
        </SettingsSlide>
      );
  }
};

export const SlideHistory = ({ imageCase, text, id }: StoryProp) => {
  const sprite = useAppSelector(state => state.mode.sprite);

  return (
    <SlideContainer>
      {slideDataRender({ imageCase, sprite, id })}
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

const ImgHero = styled(Character)`
  object-fit: none;
  object-position: -20px -121px;
  width: 91px;
  height: 81px;
`;

const ImgPlatform1 = styled(Character)`
  object-fit: none;
  object-position: 1px 1px;
  width: 110px;
  height: 32px;
`;

const ImgPlatform2 = styled(Character)`
  object-fit: none;
  object-position: 1px -31px;
  width: 110px;
  height: 30px;
`;

const SlideContainer = styled('div')`
  width: 100%;
  height: 100%;
`;

const StyledText = styled(Text)`
  color: ${({ theme }) => theme.colors.core.text.quinary};
`;

export const SlideTutorial = ({ imageCase, text }: TutorialProp) => {
  const sprite = useAppSelector(state => state.mode.sprite);

  return (
    <SlideTutorialContainer>
      <SlideTutorialStyledText>{text}</SlideTutorialStyledText>
      {slideDataRender({ imageCase, sprite })}
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

const SettingsSlide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const Control = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 60%;
`;

const ImgControl = styled.img`
  object-fit: none;
  width: 19px;
  height: 19px;
  transform: scale(5);
`;

const ImgControlLeft = styled(ImgControl)`
  object-position: -91px -619px;
`;

const ImgControlRight = styled(ImgControl)`
  object-position: -91px -639px;
`;

const ImgSprite = styled.img`
  object-fit: none;
  object-position: -20px -121px;
  width: 91px;
  height: 81px;
`;
