import { Route } from 'react-router-dom';
import { paths } from 'src/components/App/constants';
import { Forum } from './Forum';

const { edit, id, newForum, index } = paths.forum;

export const Routes = [
  <Route index element={<Forum />} key={index} />,
  <Route path={newForum} element={<div>Страница создания новой темы</div>} key={newForum} />,
  <Route path={id} key={id}>
    <Route index element={<div>Страница с обсуждениями темы1</div>} />
    <Route path={edit} element={<div>Страница изменения темы</div>} key={edit} />
  </Route>,
];
