export class Spring {
  ctx: CanvasRenderingContext2D;
  width = 26;
  height = 30;
  xPosition = 0;
  yPosition = 0;
  sprite: HTMLImageElement;
  /**
   * Sprite clipping
   */
  clippingXPosition = 0;
  clippingYPosition = 0;
  clippingWidth = 45;
  clippingHeight = 53;
  state = 0;
  constructor(context: CanvasRenderingContext2D, sprite: HTMLImageElement) {
    this.ctx = context;
    this.sprite = sprite;
  }
  draw() {
    if (this.state === 0) this.clippingYPosition = 445;
    else if (this.state === 1) this.clippingYPosition = 501;

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
