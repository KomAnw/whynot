import styled from 'styled-components';
import { useMemo, useRef } from 'react';
import { TSizes } from 'pages/Game/types/types';
import { Player } from 'pages/Game/controllers/Player/Player';
import { Ground } from 'pages/Game/controllers/Ground/Ground';
import { useDidMount } from 'src/hooks/react';
import { Platforms } from './controllers/Platforms/Platforms';

export const Game = () => {
  const sizes = useMemo<TSizes>(() => ({ width: 500, height: 600 }), []);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const canvasContextRef = useRef<CanvasRenderingContext2D | null>(null);
  let player = new Player(canvasContextRef.current as CanvasRenderingContext2D, sizes);
  let platforms = new Platforms(canvasContextRef.current as CanvasRenderingContext2D, sizes);
  let ground = new Ground(canvasContextRef.current as CanvasRenderingContext2D, sizes);

  const canvasInit = () => {
    const canvas = canvasRef.current as HTMLCanvasElement;

    canvasContextRef.current = canvas.getContext('2d');
  };

  const canvasClearFrame = () => {
    const ctx = canvasContextRef.current as CanvasRenderingContext2D;

    ctx.clearRect(0, 0, sizes.width, sizes.height);
  };

  const update = () => {
    canvasClearFrame();

    platforms.draw();

    player.calculatePlayerActions();

    player.draw();

    ground.draw();

    player.playerMovement();

    requestAnimationFrame(update);
  };

  const init = () => {
    const context = canvasContextRef.current as CanvasRenderingContext2D;

    platforms = new Platforms(context, sizes);

    player = new Player(context, sizes);

    ground = new Ground(context, sizes);

    document.addEventListener('keydown', e => {
      const { key } = e;

      if (key === 'ArrowLeft') {
        player.isMovingLeft = true;
      }

      if (key === 'ArrowRight') {
        player.isMovingRight = true;
      }
    });

    document.addEventListener('keyup', e => {
      const { key } = e;

      if (key === 'ArrowLeft') {
        player.isMovingLeft = false;
      }

      if (key === 'ArrowRight') {
        player.isMovingRight = false;
      }
    });

    ground.draw();

    player.draw();
  };

  useDidMount(() => {
    canvasInit();

    init();

    update();
  });

  return (
    <GameWindow>
      <canvas ref={canvasRef} width={sizes.width} height={sizes.height} />
    </GameWindow>
  );
};

const GameWindow = styled.div`
  border: 1px solid black;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
