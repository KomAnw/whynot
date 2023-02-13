import lose from 'assets/images/gomer-lose.png';
import win from 'assets/images/gomer-win.png';
import styled from 'styled-components';
import { paths } from 'components/App/constants';
import { GameOverProps, ImageProps } from 'components/GameOver/types';
import { H1 } from 'src/design/H1';
import { H3 } from 'src/design/H3';
import { Text } from 'src/design/Text';
import { ButtonVariants } from 'components/Button/types';
import { Link } from 'react-router-dom';
import { Button } from 'components/Button';

const { menu, game } = paths;

const buttons = [
  {
    variant: 'primary' as ButtonVariants,
    to: menu,
    text: 'Menu',
  },
  {
    variant: 'secondary' as ButtonVariants,
    to: game.index,
    text: 'Play',
  },
];

const Buttons = () => {
  return (
    <ButtonsContainer>
      {buttons.map(({ variant, text, to }) => (
        <Link to={to} key={text}>
          <Button variant={variant}>{text}</Button>
        </Link>
      ))}
    </ButtonsContainer>
  );
};

export const GameOver = ({ isWon, level, gameScore, totalScore }: GameOverProps) => {
  const title = isWon ? 'Congratulations!' : 'Wasted!';
  const message = isWon ? `You've passed level ${level}!` : `Level ${level} hasn't been completed!`;

  return (
    <InnerContainer>
      <Title>{title}</Title>
      <Message>{message}</Message>
      <Image isWon={isWon} />
      <TextScore>
        Game score:&nbsp; <TextBold>{gameScore}</TextBold>{' '}
      </TextScore>
      <TextScore>
        Total score:&nbsp; <TextBold>{totalScore}</TextBold>
      </TextScore>
      <Buttons />
    </InnerContainer>
  );
};

const Image = styled.div<ImageProps>`
  width: 406px;
  height: 354px;
  background-image: url(${props => (props.isWon ? win : lose)});
  background-repeat: no-repeat;
`;

const InnerContainer = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  width: 600px;
  height: 700px;
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.core.background.primary};
  padding: 25px 31px 30px 31px;
  border-radius: 20px;
`;

const Title = styled(H1)`
  margin: 0;
`;

const Message = styled(H3)`
  text-align: center;
  margin-bottom: 18px;
`;

const TextScore = styled(Text)`
  display: flex;
  text-align: left;
  width: 100%;
`;

const TextBold = styled(Text)`
  font-weight: bold;
`;

const ButtonsContainer = styled('div')`
  display: flex;
  flex-direction: row;
  margin-top: 63px;
  justify-content: space-between;
  width: 336px;
`;
