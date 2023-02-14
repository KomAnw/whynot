import styled from 'styled-components';
import { useEffect, useMemo, useRef } from 'react';
import { TSizes } from 'pages/Game/types/types';
import { Player } from 'pages/Game/controllers/Player/Players';
import { Platforms } from './controllers/Platforms/Platforms';

export const Game = () => {
  const sizes = useMemo<TSizes>(() => ({ width: 422, height: 522 }), []);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const canvasContextRef = useRef<CanvasRenderingContext2D | null>(null);
  let player: Player = new Player(canvasContextRef.current as CanvasRenderingContext2D, sizes);
  let platforms = new Platforms(canvasContextRef.current as CanvasRenderingContext2D, sizes);

  const canvasInit = () => {
    const canvas = canvasRef.current as HTMLCanvasElement;

    canvasContextRef.current = canvas.getContext('2d');
  };

  const calculatePlayerActions = () => {
    // Accelerations produces when the user hold the keys
    if (player.isMovingLeft) {
      player.xPosition += player.currentXPosition;
      player.currentXPosition -= 0.15;
    } else {
      player.xPosition += player.currentXPosition;

      if (player.currentXPosition < 0) {
        player.currentXPosition += 0.1;
      }
    }

    if (player.isMovingRight) {
      player.xPosition += player.currentXPosition;
      player.currentXPosition += 0.15;
    } else {
      player.xPosition += player.currentXPosition;

      if (player.currentXPosition > 0) {
        player.currentXPosition -= 0.1;
      }
    }

    // Speed limits
    if (player.currentXPosition > 8) {
      player.currentXPosition = 8;
    } else if (player.currentXPosition < -8) {
      player.currentXPosition = -8;
    }

    if (player.currentXPosition > sizes.width) {
      player.currentXPosition = 0 - player.width;
    } else if (player.currentXPosition < 0 - player.width) {
      player.currentXPosition = sizes.width;
    }

    // Make the player move through walls
    if (player.xPosition > sizes.width) {
      player.xPosition = 0 - player.width;
    } else if (player.xPosition < 0 - player.width) {
      player.xPosition = sizes.width;
    }
  };

  const update = () => {
    const ctx = canvasContextRef.current as CanvasRenderingContext2D;

    ctx.clearRect(0, 0, sizes.width, sizes.height);

    calculatePlayerActions();

    player.draw();

    requestAnimationFrame(update);
  };

  const init = () => {
    player = new Player(canvasContextRef.current as CanvasRenderingContext2D, sizes);

    platforms = new Platforms(canvasContextRef.current as CanvasRenderingContext2D, sizes);

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
  };

  useEffect(() => {
    canvasInit();

    init();

    platforms.draw();

    update();
  }, []);

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
