import { lazy } from 'react';
import { Route } from 'react-router-dom';
import { paths } from 'src/components/App/constants';
import WithSuspense from 'src/hoc/WithSuspence';

const { id, index } = paths.forum;
const Forum = WithSuspense(lazy(() => import('./pages/Forum/Forum')));
const Post = WithSuspense(lazy(() => import('./pages/Post/Post')));

export const routes = [
  <Route index element={<Forum />} key={index} />,
  <Route path={id} key={id}>
    <Route index element={<Post />} />
  </Route>,
];
