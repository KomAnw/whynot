import { Route } from 'react-router-dom';
import { paths } from 'src/components/App/constants';
import { Profile } from './Profile';

const { avatar, update, index } = paths.profile;

export const routes = [
  <Route index element={<Profile />} key={index} />,
  <Route path={avatar} element={<div>Страница обновления аватара</div>} key={avatar} />,
  <Route path={update} element={<div>Страница обновления данных профиля</div>} key={update} />,
];
