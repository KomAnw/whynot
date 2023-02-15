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
  static position = 0;
  static platformCount = 10;
  ctx: CanvasRenderingContext2D;
  sizes: TSizes;
  platforms: Platform[] = [];

  constructor(context: CanvasRenderingContext2D, sizes: TSizes) {
    this.ctx = context;
    this.sizes = sizes;
  }

  add() {
    for (let i = 0; i < Platforms.platformCount; i++) {
      const platform = new Platform(this.ctx, this.sizes, Platforms.position);

      Platforms.position += this.sizes.height / Platforms.platformCount;

      this.platforms.push(platform);
    }
  }

  draw() {
    this.add();

    this.platforms.forEach(platform => {
      platform.draw();
    });
  }
}
