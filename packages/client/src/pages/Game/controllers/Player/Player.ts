import { TSizes } from 'pages/Game/types/types';
import { Ground } from 'pages/Game/controllers/Ground/Ground';
import { Platforms } from 'pages/Game/controllers/Platforms/Platforms';

export class Player {
  maxSpeed = 8;
  jumpHeight = -8;
  gravity = 0.2;
  width = 55;
  height = 40;
  isMovingLeft: boolean;
  isMovingRight: boolean;
  ctx: CanvasRenderingContext2D;
  currentYPosition: number;
  currentXPosition: number;
  xPosition: number;
  yPosition: number;
  sizes: TSizes;
  platforms: Platforms;

  constructor(context: CanvasRenderingContext2D, sizes: TSizes, platforms: Platforms) {
    this.isMovingLeft = false;
    this.isMovingRight = false;
    this.ctx = context;
    this.currentYPosition = 11;
    this.currentXPosition = 0;
    this.xPosition = sizes.width / 2 - this.width / 2;
    this.yPosition = sizes.height;
    this.sizes = sizes;
    this.platforms = platforms;
  }

  jump() {
    this.currentYPosition = this.jumpHeight;
  }

  jumpHigh() {
    this.currentYPosition = this.jumpHeight * 2;
  }

  playerMovement() {
    this.yPosition += this.currentYPosition;
    this.currentYPosition += this.gravity;

    if (
      this.currentYPosition > 0 &&
      this.xPosition + 15 < 100 &&
      this.xPosition + this.width - 15 > 155 &&
      this.yPosition + this.height > 475 &&
      this.yPosition + this.height < 500
    ) {
      this.jump();
    }
  }

  /**
   * Registration jumps out of platforms.
   */
  collides() {
    this.platforms.data.forEach(platform => {
      if (
        this.currentYPosition > 0 &&
        this.xPosition + 15 < platform.xPosition + platform.width &&
        this.xPosition + this.width - 15 > platform.xPosition &&
        this.yPosition + this.height > platform.yPosition &&
        this.yPosition + this.height < platform.yPosition + platform.height
      ) {
        this.jump();
      }
    });
  }

  calculatePlayerActions() {
    const ground = new Ground(this.ctx, this.sizes);

    /**
     * Accelerations produces when the user hold the keys.
     */
    if (this.isMovingLeft) {
      this.xPosition += this.currentXPosition;
      this.currentXPosition -= 0.15;
    } else {
      this.xPosition += this.currentXPosition;

      if (this.currentXPosition < 0) {
        this.currentXPosition += 0.1;
      }
    }

    if (this.isMovingRight) {
      this.xPosition += this.currentXPosition;
      this.currentXPosition += 0.15;
    } else {
      this.xPosition += this.currentXPosition;

      if (this.currentXPosition > 0) {
        this.currentXPosition -= 0.1;
      }
    }

    /**
     * Speed limits.
     */
    if (this.currentXPosition > this.maxSpeed) {
      this.currentXPosition = this.maxSpeed;
    } else if (this.currentXPosition < -this.maxSpeed) {
      this.currentXPosition = -this.maxSpeed;
    }

    if (this.currentXPosition > this.sizes.width) {
      this.currentXPosition = 0 - this.width;
    } else if (this.currentXPosition < 0 - this.width) {
      this.currentXPosition = this.sizes.width;
    }

    /**
     * Make the player move through walls.
     */
    if (this.xPosition > this.sizes.width) {
      this.xPosition = 0 - this.width;
    } else if (this.xPosition < 0 - this.width) {
      this.xPosition = this.sizes.width;
    }

    /**
     * Player jumps when he is on the ground.
     */
    if (this.yPosition + this.height > ground.yPosition && ground.yPosition < this.sizes.height) {
      this.jump();
    }

    /**
     * When the player reaches half height, move the platforms to create the illusion of scrolling
     * and recreate the platforms that are out of viewport.
     */
    if (this.yPosition >= this.sizes.height / 2 - this.height / 2) {
      this.yPosition += this.currentYPosition;
      this.currentYPosition += this.gravity;
    } else {
      this.platforms.calculate(this.currentYPosition);

      this.currentYPosition += this.gravity;

      if (this.currentYPosition >= 0) {
        this.yPosition += this.currentYPosition;
        this.currentYPosition += this.gravity;
      }
    }

    this.collides();
  }

  draw() {
    this.ctx.fillRect(this.xPosition, this.yPosition, this.width, this.height);
  }
}
