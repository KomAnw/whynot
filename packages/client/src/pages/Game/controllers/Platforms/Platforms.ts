import { TSizes } from 'pages/Game/types/types';

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

export class Platforms {
  position = 0;
  platformCount = 10;
  platformList: Platform[] = [];
  ctx: CanvasRenderingContext2D;
  sizes: TSizes;

  constructor(context: CanvasRenderingContext2D, sizes: TSizes) {
    this.ctx = context;
    this.sizes = sizes;
  }

  init() {
    for (let i = 0; i < this.platformCount; i++) {
      const platform = new Platform(this.ctx, this.sizes, this.position);

      this.position += this.sizes.height / this.platformCount;

      this.platformList.push(platform);
    }
  }

  calculate(playerYPosition: number) {
    this.platformList.forEach((platform, index) => {
      if (playerYPosition < 0) {
        platform.yPosition -= playerYPosition;
      }

      if (platform.yPosition > this.sizes.height) {
        this.platformList[index] = new Platform(this.ctx, this.sizes, this.position);
        this.platformList[index].yPosition = platform.yPosition - this.sizes.height;
      }
    });
  }

  draw() {
    this.platformList.forEach(platform => {
      platform.draw();
    });
  }
}
