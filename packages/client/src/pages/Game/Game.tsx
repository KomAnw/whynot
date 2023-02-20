import styled from 'styled-components';
import { useMemo, useRef, useEffect, useState } from 'react';
import { TSizes } from 'pages/Game/types/types';
import { Player } from 'pages/Game/controllers/Player/Player';
import { Ground } from 'pages/Game/controllers/Ground/Ground';
import { useDidMount, useWillUnmount } from 'src/hooks/react';
import Portal from 'src/components/Portal';
import { Text } from 'src/design/Text';
import { Platforms } from './controllers/Platforms/Platforms';
import GameOverPage from './pages/GameOverPage';

export const Game = () => {
  const [isOpenPopup, setIsOpenPopup] = useState<boolean>(false);
  const [count, setCount] = useState(500);
  const [score, setScore] = useState(0);
  const [finalScore, setFinalScore] = useState(0);
  const [isLose, setIsLose] = useState<boolean>(false);
  const [isWon, setIsWon] = useState<boolean>();

  const sizes = useMemo<TSizes>(() => ({ width: 500, height: 600 }), []);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const canvasContextRef = useRef<CanvasRenderingContext2D | null>(null);
  let player: Player;
  let platforms: Platforms;
  let ground: Ground;

  useEffect(() => {
    const timer: any = count > 0 && setInterval(() => setCount(count - 1), 10);
    let switcher = false;

    if (count === 0) {
      setIsWon(true);
      if (!switcher) {
        switcher = true;
        setFinalScore(score);
        clearInterval(timer);
      }
      openPopup();
    }

    if (isLose) {
      setIsLose(true);
      setScore(0);
      clearInterval(timer);
      openPopup();
    }

    return () => clearInterval(timer);
  }, [count]);

  const onKeyDownHandler = (e: KeyboardEvent) => {
    const { key } = e;

    if (key === 'ArrowLeft') {
      player.isMovingLeft = true;
    }

    if (key === 'ArrowRight') {
      player.isMovingRight = true;
    }
  };

  const onKeyUpHandler = (e: KeyboardEvent) => {
    const { key } = e;

    if (key === 'ArrowLeft') {
      player.isMovingLeft = false;
    }

    if (key === 'ArrowRight') {
      player.isMovingRight = false;
    }
  };

  const canvasInit = () => {
    const canvas = canvasRef.current;

    if (canvas) {
      canvasContextRef.current = canvas.getContext('2d');
    }
  };

  const canvasClearFrame = () => {
    const context = canvasContextRef.current;

    if (context) {
      context.clearRect(0, 0, sizes.width, sizes.height);
    }
  };

  const update = () => {
    if (!player.isDead) {
      setScore(player.sum);

      setIsLose(false);

      canvasClearFrame();

      player.calculatePlayerActions();

      platforms.draw();

      player.draw();

      ground.draw();

      player.playerMovement();

      requestAnimationFrame(update);
    } else {
      setIsLose(true);

      requestAnimationFrame(update);
    }
  };

  const init = () => {
    const context = canvasContextRef.current;

    if (!context) {
      return;
    }

    document.addEventListener('keydown', onKeyDownHandler);

    document.addEventListener('keyup', onKeyUpHandler);

    platforms = new Platforms(context, sizes);

    player = new Player(context, sizes, platforms);

    ground = new Ground(context, sizes);

    platforms.init();
  };

  useDidMount(() => {
    canvasInit();

    init();

    update();
  });

  useWillUnmount(() => {
    document.removeEventListener('keydown', onKeyDownHandler);

    document.removeEventListener('keyup', onKeyUpHandler);
  });

  const openPopup = () => {
    setIsOpenPopup(true);
  };

  const startGameAgain = () => {
    setCount(0);
  };

  return (
    <>
      {isOpenPopup ? (
        <Portal>
          <GameOverPage
            setIsOpenPopup={setIsOpenPopup}
            startGameAgain={startGameAgain}
            level={6}
            score={finalScore}
            totalScore={1200}
            win={isWon}
          />
        </Portal>
      ) : (
        <GameWindow>
          <Wrapper>
            <Wrapper>
              <TextScore>Time remain:&nbsp;</TextScore>
              <TextBold>{count}</TextBold>
            </Wrapper>
            <Wrapper>
              <TextScore>Score:&nbsp;</TextScore>
              <TextBold>{score}&nbsp;points</TextBold>
            </Wrapper>
          </Wrapper>

          <canvas ref={canvasRef} width={sizes.width} height={sizes.height} />
        </GameWindow>
      )}
    </>
  );
};

const GameWindow = styled.div`
  border: 1px solid black;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const TextScore = styled(Text)`
  text-align: left;
  width: 100%;
`;

const TextBold = styled(Text)`
  font-weight: bold;
`;
