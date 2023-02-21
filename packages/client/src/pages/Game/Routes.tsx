import { lazy } from 'react';
import { Route } from 'react-router-dom';
import { paths } from 'src/App/constants';
import WithSuspense from 'src/hoc/WithSuspence';

const { lose, win, index } = paths.game;
const Game = WithSuspense(lazy(() => import('./Game')));

export const routes = [
  <Route index path="/game" element={<Game />} key={index} />,
  <Route path={lose} element={<div>Проиграл</div>} key={lose} />,
  <Route path={win} element={<div>Выиграл</div>} key={win} />,
];
