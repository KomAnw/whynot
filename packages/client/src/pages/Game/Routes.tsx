import { Route } from 'react-router-dom';
import { paths } from 'src/App/constants';
import { Game } from './Game';

const { lose, win, index } = paths.game;

export const routes = [
  <Route index path="/game" element={<Game />} key={index} />,
  <Route path={lose} element={<div>Проиграл</div>} key={lose} />,
  <Route path={win} element={<div>Выиграл</div>} key={win} />,
];
