import { TSizes } from 'pages/Game/types/types';

export class Ground {
  sizes: TSizes;
  ctx: CanvasRenderingContext2D;
  height = 5;
  width: number;
  yPosition: number;
  xPosition = 0;

  constructor(context: CanvasRenderingContext2D, sizes: TSizes) {
    this.sizes = sizes;
    this.ctx = context;
    this.width = sizes.width;
    this.yPosition = sizes.height - this.height;
  }

  draw() {
    this.ctx.fillRect(this.xPosition, this.yPosition, this.width, this.height);
  }
}
