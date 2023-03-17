import { Player } from '../Player/Player';

export class Gamepad {
  [x: string]: any;
  constructor(gamepadState: boolean, gamepadIndex: number | null, player: Player) {
    this.gamepadState = gamepadState;
    this.gamepadIndex = gamepadIndex;
    this.player = player;
  }
  onDisconnectedGamepadHandler = () => {
    this.gamepadIndex = null;
  };

  onConnectedGamepadHandler = (e: GamepadEvent) => {
    this.gamepadIndex = e.gamepad.index;
  };

  gamepadController = (gamepadIndex: number) => {
    if (this.gamepadState && gamepadIndex !== null) {
      const gamepad = navigator.getGamepads()[gamepadIndex];
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
  };
}
