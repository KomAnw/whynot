import { Route } from 'react-router-dom';
import { paths } from 'src/components/App/constants';
import { Game } from './Game';

const { loose, win, index } = paths.game;

export const Routes = [
  <Route index path="/game" element={<Game />} key={index} />,
  <Route path={loose} element={<div>Проиграл</div>} key={loose} />,
  <Route path={win} element={<div>Выиграл</div>} key={win} />,
];
