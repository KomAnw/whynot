import lose from 'assets/images/gomer-lose.png';
import win from 'assets/images/gomer-win.png';
import styled from 'styled-components';
import { paths } from 'src/components/App/constants';
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

export const GameOver = ({ isWon, gameScore, onClick }: GameOverProps) => {
  const title = isWon ? 'Congratulations!' : 'Wasted!';

  return (
    <InnerContainer>
      <H1>{title}</H1>
      <Image isWon={isWon} />
      <Text>
        Game score: <b> {gameScore} </b>{' '}
      </Text>
      <Buttons onClick={onClick} />
    </InnerContainer>
  );
};

const Image = styled.div<ImageProps>`
  width: 406px;
  height: 354px;
  background-image: url(${props => (props.isWon ? win : lose)});
  background-position: center;
  background-repeat: no-repeat;
`;

const InnerContainer = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 600px;
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.core.background.primary};
  padding: 50px;
  border-radius: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ButtonsContainer = styled('div')`
  display: flex;
  justify-content: space-between;
  margin-top: 63px;
  width: 336px;
`;
