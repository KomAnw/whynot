import styled from 'styled-components';
import { useMemo, useRef } from 'react';
import { TSizes } from 'pages/Game/types/types';
import { Player } from 'pages/Game/controllers/Player/Player';
import { Ground } from 'pages/Game/controllers/Ground/Ground';
import { useDidMount, useWillUnmount } from 'src/hooks/react';
import { Platforms } from './controllers/Platforms/Platforms';

const Game = () => {
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
    canvasClearFrame();

    player.calculatePlayerActions();

    platforms.draw();

    player.draw();

    ground.draw();

    player.playerMovement();

    requestAnimationFrame(update);
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

  return (
    <GameWindow>
      <canvas ref={canvasRef} width={sizes.width} height={sizes.height} />
    </GameWindow>
  );
};

export default Game;

const GameWindow = styled.div`
  border: 1px solid black;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
