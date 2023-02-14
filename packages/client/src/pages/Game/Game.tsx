import styled from 'styled-components';
import { useEffect, useMemo, useRef } from 'react';

type TSizes = {
  width: number;
  height: number;
};

class Player {
  width = 50;
  height = 40;
  isMovingLeft: boolean;
  isMovingRight: boolean;
  ctx: CanvasRenderingContext2D;
  currentYPosition: number;
  currentXPosition: number;
  xPosition: number;
  yPosition: number;

  constructor(context: CanvasRenderingContext2D, sizes: TSizes) {
    this.isMovingLeft = false;
    this.isMovingRight = false;
    this.ctx = context;
    this.currentYPosition = 11;
    this.currentXPosition = 0;
    this.xPosition = sizes.width / 2 - this.width / 2;
    this.yPosition = sizes.height - 20;
  }

  movedLeft() {
    this.isMovingLeft = !this.isMovingLeft;
  }

  movedRight() {
    this.isMovingRight = !this.isMovingRight;
  }

  changeX(value: number) {
    this.xPosition = value;
  }

  jump() {
    this.currentYPosition = -8;
  }

  jumpHigh() {
    this.currentYPosition = -16;
  }

  draw() {
    this.ctx.fillRect(this.xPosition, this.yPosition, this.width, this.height);
  }
}

class Platform {
  ctx: CanvasRenderingContext2D;
  width = 70;
  height = 17;
  xPosition: number;
  yPosition: number;
  currentPosition: number;

  constructor(context: CanvasRenderingContext2D, sizes: TSizes, position: number) {
    this.ctx = context;
    this.xPosition = Math.random() * (sizes.width - this.width);
    this.yPosition = position;
    this.currentPosition = position;
  }

  draw() {
    this.ctx.fillRect(this.xPosition, this.yPosition, this.width, this.height);
  }
}

class Platforms {
  static position = 0;
  static platformCount = 10;
  ctx: CanvasRenderingContext2D;
  sizes: TSizes;

  constructor(context: CanvasRenderingContext2D, sizes: TSizes) {
    this.ctx = context;
    this.sizes = sizes;
  }

  draw() {
    for (let i = 0; i < Platforms.platformCount; i++) {
      const platform = new Platform(this.ctx, this.sizes, Platforms.position);

      Platforms.position += this.sizes.height / Platforms.platformCount;

      platform.draw();
    }
  }
}

export const Game = () => {
  const sizes = useMemo<TSizes>(() => ({ width: 500, height: 600 }), []);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const canvasContextRef = useRef<CanvasRenderingContext2D | null>(null);
  let player: Player = new Player(canvasContextRef.current as CanvasRenderingContext2D, sizes);
  let platforms = new Platforms(canvasContextRef.current as CanvasRenderingContext2D, sizes);

  const canvasInit = () => {
    const canvas = canvasRef.current as HTMLCanvasElement;

    canvasContextRef.current = canvas.getContext('2d');
  };

  const calculatePlayerActions = () => {
    if (player?.isMovingLeft) {
      player.changeX((player.xPosition += player.currentXPosition));
      player.currentXPosition -= 0.15;
      player.movedLeft();
    } else {
      player!.xPosition += player!.currentXPosition;
      if (player!.currentXPosition < 0) {
        player!.currentXPosition += 0.1;
      }
    }

    if (player?.isMovingRight) {
      player.xPosition += player.currentXPosition;
      player.currentXPosition += 0.15;
      player.movedRight();
    } else {
      player!.xPosition += player!.currentXPosition;
      if (player!.currentXPosition > 0) {
        player!.currentXPosition -= 0.1;
      }
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
        player.movedLeft();
      }

      if (key === 'ArrowRight') {
        player.movedRight();
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
