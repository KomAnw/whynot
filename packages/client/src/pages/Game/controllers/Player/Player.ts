import type { TSizes } from 'pages/Game/types/types';
import { type Ground } from 'pages/Game/controllers/Ground/Ground';
import { type Platforms } from 'pages/Game/controllers/Platforms/Platforms';
import { Score } from 'pages/Game/controllers/Score/Score';
import type { Spring } from 'pages/Game/controllers/Spring/Spring';

export class Player {
  maxSpeed = 8;
  jumpHeight = -8;
  gravity = 0.2;
  width = 55;
  height = 40;
  isMovingLeft: boolean;
  isMovingRight: boolean;
  isLookingToLeft: boolean;
  isLookingToRight: boolean;
  ctx: CanvasRenderingContext2D;
  currentYPosition: number;
  currentXPosition: number;
  xPosition: number;
  yPosition: number;
  sizes: TSizes;
  platforms: Platforms;
  ground: Ground;
  sprite: HTMLImageElement;
  spring: Spring;
  isDisplayUp = false;
  isDead = false;

  /**
   * Sprite clipping
   */
  clippingXPosition = 0;
  clippingYPosition = 121;
  clippingWidth = 110;
  clippingHeight = 80;
  constructor(
    context: CanvasRenderingContext2D,
    sizes: TSizes,
    platforms: Platforms,
    ground: Ground,
    sprite: HTMLImageElement,
    spring: Spring
  ) {
    this.isMovingLeft = false;
    this.isMovingRight = false;
    this.isLookingToLeft = false;
    this.isLookingToRight = false;
    this.ctx = context;
    this.currentYPosition = 11;
    this.currentXPosition = 0;
    this.xPosition = sizes.width / 2 - this.width / 2;
    this.yPosition = sizes.height;
    this.sizes = sizes;
    this.platforms = platforms;
    this.ground = ground;
    this.sprite = sprite;
    this.spring = spring;
  }

  jump() {
    this.currentYPosition = this.jumpHeight;
  }

  jumpHigh() {
    this.currentYPosition = -16;
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
    /**
     * Platforms
     */
    this.platforms.platformList.forEach(p => {
      if (
        this.currentYPosition > 0 &&
        p.state === 0 &&
        this.xPosition + 15 < p.xPosition + p.width &&
        this.xPosition + this.width - 15 > p.xPosition &&
        this.yPosition + this.height > p.yPosition &&
        this.yPosition + this.height < p.yPosition + p.height
      ) {
        if (p.type === 3 && !p.isBroken) {
          p.isBroken = true;
          this.platforms.jumpCount = 0;
        } else if (p.type === 4 && p.state === 0) {
          this.jump();
          p.state = 1;
        } else if (!p.isBroken) {
          this.jump();
        }
      }
    });

    /**
     * Springs
     */
    if (
      this.currentYPosition > 0 &&
      this.spring.state === 0 &&
      this.xPosition + 15 < this.spring.xPosition + this.spring.width &&
      this.xPosition + this.width - 15 > this.spring.xPosition &&
      this.yPosition + this.height > this.spring.yPosition &&
      this.yPosition + this.height < this.spring.yPosition + this.spring.height
    ) {
      this.spring.state = 1;
      this.jumpHigh();
    }
  }

  gameOver() {
    this.isDead = true;
  }

  calculatePlayerActions() {
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
    if (this.yPosition + this.height > this.ground.yPosition && this.ground.yPosition < this.sizes.height) {
      this.jump();
    }

    /**
     * Game-over if display is up and player fall down on the bottom
     */
    if (
      this.ground.yPosition > this.sizes.height &&
      this.yPosition + this.height > this.sizes.height &&
      this.isDisplayUp
    ) {
      this.gameOver();
    }

    /**
     * When the player reaches half height, move the platforms to create the illusion of scrolling
     * and recreate the platforms that are out of viewport.
     */
    if (this.yPosition >= this.sizes.height / 2 - this.height / 2) {
      this.yPosition += this.currentYPosition;
      this.currentYPosition += this.gravity;
    } else {
      this.platforms.calculateVerticalMovement(this.currentYPosition);

      this.ground.yPosition -= this.currentYPosition;
      this.currentYPosition += this.gravity;

      if (this.currentYPosition >= 0) {
        this.yPosition += this.currentYPosition;
        this.currentYPosition += this.gravity;

        if (!this.isDisplayUp) {
          this.isDisplayUp = true;
        }
      }
      Score.updateScore();
    }

    this.collides();
  }

  calculateSpringActions() {
    const p = this.platforms.platformList[0];

    if (p.type === 1 || p.type === 2) {
      this.spring.xPosition = p.xPosition + p.width / 2 - this.spring.width / 2;
      this.spring.yPosition = p.yPosition - p.height - 10;

      if (this.spring.yPosition > this.sizes.height / 1.1) this.spring.state = 0;

      this.spring.draw();
    } else {
      this.spring.xPosition = 0 - this.spring.width;
      this.spring.yPosition = 0 - this.spring.height;
    }
  }

  draw() {
    this.clippingYPosition = this.isLookingToLeft ? 201 : 121;
    this.clippingYPosition = this.isLookingToRight ? 121 : 201;
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
