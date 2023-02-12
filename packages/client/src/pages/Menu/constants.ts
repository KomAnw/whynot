import { paths } from 'components/App/constants';

const { tutorial, profile, leaderboard, forum, game, welcome } = paths;

export const listMenu = [
  {
    name: 'ИГРАТЬ',
    path: game.index,
    type: 'button',
  },
  {
    name: 'Туториал',
    path: tutorial,
    type: 'link',
  },
  {
    name: 'Профиль',
    path: profile.index,
    type: 'link',
  },
  {
    name: 'Таблица Лидеров',
    path: leaderboard,
    type: 'link',
  },
  {
    name: 'Форум',
    path: forum.index,
    type: 'link',
  },
  {
    name: 'Выход',
    path: welcome,
    type: 'link',
  },
] as const;
