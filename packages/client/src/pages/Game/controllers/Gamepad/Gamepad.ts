import { type Player } from '../Player/Player';

export class GamepadIndex {
  static index: number | null = null;

  static init(e: GamepadEvent) {
    GamepadIndex.index = e.gamepad.index;
  }
}

export class Gamepad {
  gamepadState = false;
  player: Player;

  constructor(gamepadState: boolean, player: Player) {
    this.gamepadState = gamepadState;
    this.player = player;
  }

  control() {
    if (this.gamepadState && GamepadIndex.index !== null) {
      const gamepad = navigator.getGamepads()[GamepadIndex.index];
      const leftOrRightArrow = gamepad?.axes[6] || 0;
      const axisThreshold = 0.5;

      if (leftOrRightArrow >= axisThreshold) {
        this.player.isMovingRight = true;
        this.player.isLookingToRight = this.player.isMovingRight;
        this.player.isLookingToLeft = false;
      } else if (leftOrRightArrow <= -axisThreshold) {
        this.player.isMovingLeft = true;
        this.player.isLookingToLeft = this.player.isMovingLeft;
        this.player.isLookingToRight = false;
      }

      if (leftOrRightArrow < axisThreshold && leftOrRightArrow > -axisThreshold) {
        this.player.isMovingLeft = false;
        this.player.isMovingRight = false;
      }
    }
  }
}
