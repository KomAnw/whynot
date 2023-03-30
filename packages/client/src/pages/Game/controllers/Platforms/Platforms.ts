import type { TSizes } from 'pages/Game/types/types';
import { Score } from 'pages/Game/controllers/Score/Score';

export class NeighboringBrokenPlatforms {
  static count = 0;
  static updateCount() {
    NeighboringBrokenPlatforms.count++;
  }
  static resetCount() {
    NeighboringBrokenPlatforms.count = 0;
  }
}

class Platform {
  ctx: CanvasRenderingContext2D;
  width = 70;
  height = 17;
  xPosition: number;
  yPosition: number;
  currentPosition: number;
  currentXPosition: number;
  sprite: HTMLImageElement;

  flag = 0;
  state = 0;

  /**
   * Sprite clipping
   */
  clippingXPosition = 0;
  clippingYPosition = 0;
  clippingWidth = 105;
  clippingHeight = 31;

  types: Array<number>;
  type: number;

  constructor(context: CanvasRenderingContext2D, sizes: TSizes, position: number, sprite: HTMLImageElement) {
    this.ctx = context;
    this.xPosition = Math.random() * (sizes.width - this.width);
    this.yPosition = position;
    this.currentPosition = position;
    this.sprite = sprite;

    const score = Score.count;

    /**
     * There are four platform types
     * 1 - Normal;
     * 2 - Moving;
     * 3 - Breakable (Go through);
     * 4 - Vanishable.
     *
     * Setting the probability of which type of platforms
     * should be shown at what score
     */

    if (score >= 1000) this.types = [2, 3, 3, 3, 4, 4, 4, 4];
    else if (score >= 500 && score < 1000) this.types = [1, 1, 1, 2, 2, 3, 3, 4, 4, 4, 4];
    else if (score >= 200 && score < 500) this.types = [1, 1, 1, 2, 2, 2, 2, 3];
    else if (score >= 100 && score < 200) this.types = [1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3];
    else if (score >= 50 && score < 100) this.types = [1, 1, 1, 1, 2, 2];
    else this.types = [1];

    this.type = this.types[Math.floor(Math.random() * this.types.length)];

    /**
     * We can't have two consecutive breakable platforms otherwise
     * it will be impossible to reach another platform sometimes!
     */
    if (this.type === 3 && NeighboringBrokenPlatforms.count < 1) {
      NeighboringBrokenPlatforms.updateCount();
    } else if (this.type === 3 && NeighboringBrokenPlatforms.count >= 1) {
      this.type = 1;
      NeighboringBrokenPlatforms.resetCount();
    }

    this.currentXPosition = 1;
  }

  draw() {
    if (this.type === 1) this.clippingYPosition = 0;
    else if (this.type === 2) this.clippingYPosition = 61;
    else if (this.type === 3 && this.flag === 0) this.clippingYPosition = 31;
    else if (this.type === 3 && this.flag === 1) this.clippingYPosition = 1000;
    else if (this.type === 4 && this.state === 0) this.clippingYPosition = 90;
    else if (this.type === 4 && this.state === 1) this.clippingYPosition = 1000;

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

export class Platforms {
  position = 0;
  platformCount = 10;
  jumpCount = 0;
  platformList: Platform[] = [];
  ctx: CanvasRenderingContext2D;
  sizes: TSizes;
  sprite: HTMLImageElement;
  subs: PlatformBrokenSubstitute;

  constructor(context: CanvasRenderingContext2D, sizes: TSizes, sprite: HTMLImageElement) {
    this.ctx = context;
    this.sizes = sizes;
    this.sprite = sprite;
    this.subs = new PlatformBrokenSubstitute(context, sprite);
  }

  init() {
    for (let i = 0; i < this.platformCount; i++) {
      const platform = new Platform(this.ctx, this.sizes, this.position, this.sprite);

      this.position += this.sizes.height / this.platformCount;

      this.platformList.push(platform);
    }
  }

  calculateVerticalMovement(playerYPosition: number) {
    this.platformList.forEach((platform, index) => {
      if (playerYPosition < 0) {
        platform.yPosition -= playerYPosition;
      }

      if (platform.yPosition > this.sizes.height) {
        this.platformList[index] = new Platform(this.ctx, this.sizes, this.position, this.sprite);
        this.platformList[index].yPosition = platform.yPosition - this.sizes.height;
      }
    });
  }

  calculateHorizontalMovement() {
    this.platformList.forEach(p => {
      if (p.type === 2) {
        if (p.xPosition < 0 || p.xPosition + p.width > this.sizes.width) p.currentXPosition *= -1;

        p.xPosition += p.currentXPosition;
      }

      if (p.flag === 1 && !this.subs.appearance && this.jumpCount === 0) {
        this.subs.xPosition = p.xPosition;
        this.subs.yPosition = p.yPosition;
        this.subs.appearance = true;

        this.jumpCount++;
      }

      p.draw();
    });

    if (this.subs.appearance) {
      this.subs.draw();
      this.subs.yPosition += 8;
    }

    if (this.subs.yPosition > this.sizes.height) {
      this.subs.appearance = false;
    }
  }

  draw() {
    this.platformList.forEach(platform => {
      platform.draw();
    });
  }
}

export class PlatformBrokenSubstitute {
  ctx: CanvasRenderingContext2D;
  height = 30;
  width = 70;
  xPosition = 10;
  yPosition = 10;
  sprite: HTMLImageElement;

  appearance = false;

  /**
   * Sprite clipping
   */
  clippingXPosition = 0;
  clippingYPosition = 554;
  clippingWidth = 105;
  clippingHeight = 60;

  constructor(context: CanvasRenderingContext2D, sprite: HTMLImageElement) {
    this.ctx = context;
    this.sprite = sprite;
  }

  draw() {
    if (this.appearance) {
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
}
