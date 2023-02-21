import lose from 'assets/images/gomer-lose.png';
import win from 'assets/images/gomer-win.png';
import styled from 'styled-components';
import { paths } from 'src/App/constants';
import { GameOverProps, ImageProps } from 'components/GameOver/types';
import { H1 } from 'src/design/H1';
import { Text } from 'src/design/Text';
import { ButtonComponent, ButtonVariants } from 'components/Button/types';
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
    action: 'onClick',
  },
];

const Buttons = ({ onClick }: Pick<ButtonComponent, 'onClick'>) => {
  return (
    <ButtonsContainer>
      {buttons.map(({ variant, text, to }) => (
        <Link to={to} key={text}>
          <Button variant={variant} onClick={onClick}>
            {text}
          </Button>
        </Link>
      ))}
    </ButtonsContainer>
  );
};

export const GameOver = ({ isWon, gameScore, totalScore, onClick }: GameOverProps) => {
  const title = isWon ? 'Congratulations!' : 'Wasted!';

  return (
    <InnerContainer>
      <Title>{title}</Title>
      <Image isWon={isWon} />
      <TextScore>
        Game score: <b> {gameScore} </b>{' '}
      </TextScore>
      <TextScore>
        Total score: <b> {totalScore} </b>
      </TextScore>
      <Buttons onClick={onClick} />
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

const TextScore = styled(Text)`
  text-align: left;
  width: 100%;
`;

const ButtonsContainer = styled('div')`
  display: flex;
  flex-direction: row;
  margin-top: 63px;
  justify-content: space-between;
  width: 336px;
`;
