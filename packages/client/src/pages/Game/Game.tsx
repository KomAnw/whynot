import styled from 'styled-components';
import { useMemo, useRef, useState } from 'react';
import { useDidMount, useWillUnmount } from 'src/hooks/react';
import { Text } from 'src/design/Text';
import { Score } from 'pages/Game/controllers/Score/Score';
import { useAppSelector } from 'src/hooks/redux';
import type { GameWindowProps } from 'pages/Game/types/types';
import GameResult from './components/GameResult';
import type { TSizes } from './types/types';
import { Player } from './controllers/Player/Player';
import { Gamepad, GamepadIndex } from './controllers/Gamepad/Gamepad';
import { Platforms } from './controllers/Platforms/Platforms';
import { Ground } from './controllers/Ground/Ground';

const Game = () => {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const [stateScore, setStateScore] = useState(Score.count);
  const sizes = useMemo<TSizes>(() => ({ width: 500, height: 600 }), []);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const canvasContextRef = useRef<CanvasRenderingContext2D | null>(null);
  const frameId = useRef<number | null>(null);
  const mode = useAppSelector(state => state.mode.sprite);
  const gamepadState = useAppSelector(state => state.gamepad.gamepadOn);
  const soundSwitchOn = useAppSelector(state => state.sound.soundOn);
  const sound = '../../public/media/sound.mp3';

  let player: Player;
  let platforms: Platforms;
  let ground: Ground;
  let gamepad: Gamepad;

  const onKeyDownHandler = (e: KeyboardEvent) => {
    const { key } = e;

    if (key === 'ArrowLeft') {
      player.isMovingLeft = true;
      player.isLookingToLeft = player.isMovingLeft;
      player.isLookingToRight = false;
    }

    if (key === 'ArrowRight') {
      player.isMovingRight = true;
      player.isLookingToRight = player.isMovingRight;
      player.isLookingToLeft = false;
    }
  };

  const onKeyUpHandler = (e: KeyboardEvent) => {
    const { key } = e;

    if (key === 'ArrowLeft') {
      player.isMovingLeft = false;
    }

    if (key === 'ArrowRight') {
      player.isMovingRight = false;
    }
  };

  const onGamepadConnectedHandler = (e: GamepadEvent) => {
    GamepadIndex.init(e);
  };

  const removeHandlers = () => {
    document.removeEventListener('keydown', onKeyDownHandler);
    document.removeEventListener('keyup', onKeyUpHandler);
    window.removeEventListener('gamepadconnected', onGamepadConnectedHandler);
  };

  const addHandlers = () => {
    document.addEventListener('keydown', onKeyDownHandler);
    document.addEventListener('keyup', onKeyUpHandler);
    window.addEventListener('gamepadconnected', onGamepadConnectedHandler);
  };

  const canvasInit = () => {
    const canvas = canvasRef.current;

    if (canvas) {
      canvasContextRef.current = canvas.getContext('2d');
    }
  };

  const canvasClearFrame = () => {
    const context = canvasContextRef.current;

    if (context) {
      context.clearRect(0, 0, sizes.width, sizes.height);
    }
  };

  const update = () => {
    if (!player.isDead) {
      canvasClearFrame();

      player.calculatePlayerActions();

      platforms.draw();

      player.draw();

      ground.draw();

      player.playerMovement();

      setStateScore(Score.count);

      gamepad.control();

      frameId.current = requestAnimationFrame(update);
    } else {
      setIsPopupOpen(true);
    }
  };

  const stopUpdate = () => {
    if (frameId.current) {
      cancelAnimationFrame(frameId.current);
      frameId.current = null;
    }
  };

  const reset = () => {
    removeHandlers();

    Score.resetScore();

    stopUpdate();
  };

  const init = () => {
    const sound: HTMLMediaElement = document.getElementById('sound') as HTMLMediaElement;

    soundSwitchOn ? sound.play() : sound.pause();
    const context = canvasContextRef.current;

    if (!context) {
      return;
    }

    addHandlers();

    const sprite = new Image();

    sprite.src = mode.sprite;

    platforms = new Platforms(context, sizes, sprite);

    ground = new Ground(context, sizes, sprite);

    player = new Player(context, sizes, platforms, ground, sprite);

    gamepad = new Gamepad(gamepadState, player);

    platforms.init();
  };

  const startGameAgain = () => {
    reset();

    init();

    frameId.current = requestAnimationFrame(update);
  };

  useDidMount(() => {
    canvasInit();

    init();

    frameId.current = requestAnimationFrame(update);
  });

  useWillUnmount(() => {
    reset();
  });

  return (
    <>
      {isPopupOpen && (
        <GameResult setIsPopupOpen={setIsPopupOpen} startGameAgain={startGameAgain} score={stateScore} isWon={true} />
      )}
      <GameWindow background={mode.background}>
        <TextScore>
          Score: <b> {stateScore} points </b>
        </TextScore>
        <canvas ref={canvasRef} width={sizes.width} height={sizes.height} />
      </GameWindow>
      <audio id="sound">
        <source src={sound} type="audio/mp3" />
      </audio>
    </>
  );
};

const GameWindow = styled.div<GameWindowProps>`
  border: 1px solid black;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: url(${props => props.background}) top left;
`;

const TextScore = styled(Text)`
  color: ${({ theme }) => theme.colors.core.text.secondary};
  text-align: left;
  width: 100%;
`;

export default Game;
