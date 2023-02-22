import { TSizes } from 'pages/Game/types/types';

export class Ground {
  sizes: TSizes;
  sprite: HTMLImageElement;
  ctx: CanvasRenderingContext2D;
  height = 5;
  width: number;
  yPosition: number;
  xPosition = 0;

  /**
   * Sprite clipping
   */
  cx = 0;
  cy = 614;
  cwidth = 100;
  cheight = 5;

  constructor(context: CanvasRenderingContext2D, sizes: TSizes, sprite: HTMLImageElement) {
    this.sizes = sizes;
    this.ctx = context;
    this.width = sizes.width;
    this.yPosition = sizes.height - this.height;
    this.sprite = sprite
  }

  draw() {
    this.ctx.drawImage(
      this.sprite,
      this.cx,
      this.cy,
      this.cwidth,
      this.cheight,
      this.xPosition,
      this.yPosition,
      this.width,
      this.height
    );
  }
}
