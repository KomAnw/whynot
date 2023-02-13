import { paths } from 'components/App/constants';

const { tutorial, profile, leaderboard, forum, game, welcome, settings } = paths;

export const listMenu = [
  {
    name: 'PLAY',
    path: game.index,
    type: 'button',
  },
  {
    name: 'Tutorial',
    path: tutorial,
    type: 'link',
  },
  {
    name: 'Profile',
    path: profile.index,
    type: 'link',
  },
  {
    name: 'Leaderboard',
    path: leaderboard,
    type: 'link',
  },
  {
    name: 'Forum',
    path: forum.index,
    type: 'link',
  },
  {
    name: 'Settings',
    path: settings,
    type: 'link',
  },
  {
    name: 'Exit',
    path: welcome,
    type: 'link',
  },
] as const;
