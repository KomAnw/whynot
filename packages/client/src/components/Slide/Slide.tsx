import { Text } from 'src/design/Text';
import styled, { css } from 'styled-components';
import { SlideProps } from './types';

const Slide = ({ image, text, id }: SlideProps) => {
  return (
    <SlideContainer>
      {image && <Character src={image} elementId={id} />}
      <StyledText>{text}</StyledText>
    </SlideContainer>
  );
};

export default Slide;

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
