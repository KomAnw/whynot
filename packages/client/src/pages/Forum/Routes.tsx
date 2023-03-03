import { lazy } from 'react';
import { Route } from 'react-router-dom';
import { paths } from 'src/components/App/constants';
import WithSuspense from 'src/hoc/WithSuspence';

const { edit, id, newForum, index } = paths.forum;
const Forum = WithSuspense(lazy(() => import('./Forum')));

export const routes = [
  <Route index element={<Forum />} key={index} />,
  <Route path={newForum} element={<div>Страница создания новой темы</div>} key={newForum} />,
  <Route path={id} key={id}>
    <Route index element={<div>Страница с обсуждениями темы1</div>} />
    <Route path={edit} element={<div>Страница изменения темы</div>} key={edit} />
  </Route>,
];
