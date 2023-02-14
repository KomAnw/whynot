import { TSizes } from 'pages/Game/types/types';

export class Player {
  width = 55;
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
