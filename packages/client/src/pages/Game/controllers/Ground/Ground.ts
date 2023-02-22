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
  clippingXPosition = 0;
  clippingYPosition = 614;
  clippingWidth = 100;
  clippingHeight = 5;

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
      this.clippingXPosition,
      this.clippingYPosition,
      this.clippingWidth,
      this.clippingHeight,
      this.xPosition,
      this.yPosition,
      this.width,
      this.height
    );
  }
}
