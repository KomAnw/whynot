export const sprites = [
  {
    name: 'Doodle',
    sprite: '/images/game/doodle/sprite.png',
    background: '/images/game/doodle/background.png',
    gameOverImage: {
      win: '/images/game/doodle/doodle-win.png',
      lose: '/images/game/doodle/doodle-lose.png',
    },
  },
  {
    name: 'Mario',
    sprite: '/images/game/mario/sprite.png',
    background: '/images/game/mario/background.png',
    gameOverImage: {
      win: '/images/game/mario/mario-win.png',
      lose: '/images/game/mario/mario-lose.png',
    },
  },
  {
    name: 'Homer',
    sprite: '/images/game/homer/sprite.png',
    background: '/images/game/homer/background.png',
    gameOverImage: {
      win: '/images/game/homer/homer-win.png',
      lose: '/images/game/homer/homer-lose.png',
    },
  },
] as const;

export const defaultSprite = sprites[0];
