import styled from 'styled-components';
import { useMemo, useRef, useState } from 'react';
import { useDidMount, useWillUnmount } from 'src/hooks/react';
import { Text } from 'src/design/Text';
import { Score } from 'pages/Game/controllers/Score/Score';
import GameResult from './components/GameResult';
import { TSizes } from './types/types';
import { Player } from './controllers/Player/Player';
import { Platforms } from './controllers/Platforms/Platforms';
import { Ground } from './controllers/Ground/Ground';

const Game = () => {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const [stateScore, setStateScore] = useState(Score.count);
  const sizes = useMemo<TSizes>(() => ({ width: 500, height: 600 }), []);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const canvasContextRef = useRef<CanvasRenderingContext2D | null>(null);
  let player: Player;
  let platforms: Platforms;
  let ground: Ground;

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
      canvasClearFrame();

      player.calculatePlayerActions();

      platforms.draw();

      player.draw();

      ground.draw();

      player.playerMovement();

      setStateScore(Score.count);

      requestAnimationFrame(update);
    } else {
      setIsPopupOpen(true);
    }
  };

  const reset = () => {
    Score.resetScore();

    canvasClearFrame();

    init();

    update();
  };

  const init = () => {
    const context = canvasContextRef.current;

    if (!context) {
      return;
    }

    platforms = new Platforms(context, sizes);

    player = new Player(context, sizes, platforms);

    ground = new Ground(context, sizes);

    platforms.init();
  };

  useDidMount(() => {
    document.addEventListener('keydown', onKeyDownHandler);

    document.addEventListener('keyup', onKeyUpHandler);

    canvasInit();

    init();

    update();
  });

  useWillUnmount(() => {
    document.removeEventListener('keydown', onKeyDownHandler);

    document.removeEventListener('keyup', onKeyUpHandler);
  });

  const startGameAgain = () => {
    reset();
  };

  return (
    <>
      {isPopupOpen ? (
        <GameResult
          setIsPopupOpen={setIsPopupOpen}
          startGameAgain={startGameAgain}
          score={50}
          totalScore={1200}
          isWon={false}
        />
      ) : (
        <GameWindow>
          <TextScore>
            Score: <b> {stateScore} points </b>
          </TextScore>
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

const TextScore = styled(Text)`
  text-align: left;
  width: 100%;
`;

export default Game;
