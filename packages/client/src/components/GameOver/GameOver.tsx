import styled from 'styled-components';
import { paths } from 'src/components/App/constants';
import type { GameOverProps, ImageProps } from 'components/GameOver/types';
import { H1 } from 'src/design/H1';
import { Text } from 'src/design/Text';
import type { ButtonComponent } from 'components/Button/types';
import { Link } from 'react-router-dom';
import { Button } from 'components/Button';
import { useAppSelector } from 'src/hooks/redux';

const { menu } = paths;

const Buttons = ({ onClick }: Pick<ButtonComponent, 'onClick'>) => {
  return (
    <ButtonsContainer>
      <Link to={menu}>
        <Button variant="primary">Menu</Button>
      </Link>
      <Button variant="secondary" onClick={onClick}>
        Play
      </Button>
    </ButtonsContainer>
  );
};

export const GameOver = ({ isWon, gameScore, onClick }: GameOverProps) => {
  const title = isWon ? 'Congratulations!' : 'Wasted!';

  const sprite = useAppSelector(state => state.mode.sprite);

  const gameOverImage = isWon ? sprite.gameOverImage.win : sprite.gameOverImage.lose;

  return (
    <InnerContainer>
      <H1>{title}</H1>
      <Image img={gameOverImage} />
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
  background-image: url('${props => props.img}');
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
