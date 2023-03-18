import { type Player } from '../Player/Player';

export class Gamepad {
  gamepadState = false;
  gamepadIndex: number | null;
  player: Player;

  constructor(gamepadState: boolean, player: Player) {
    this.gamepadState = gamepadState;
    this.player = player;
    this.gamepadIndex = null;
  }

  reset() {
    this.gamepadIndex = null;
  }

  init(e: GamepadEvent) {
    this.gamepadIndex = e.gamepad.index;
  }

  control() {
    console.log(this.gamepadState, this.gamepadIndex);
    if (this.gamepadState && this.gamepadIndex !== null) {
      const gamepad = navigator.getGamepads()[this.gamepadIndex];
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
