import { lazy } from 'react';
import { Route } from 'react-router-dom';
import { paths } from 'src/components/App/constants';
import WithSuspense from 'src/hoc/WithSuspence';

const { id, index } = paths.forum;
const ForumPosts = WithSuspense(lazy(() => import('./pages/ForumPosts/ForumPosts')));
const ForumPost = WithSuspense(lazy(() => import('./pages/ForumPost/ForumPost')));

export const routes = [
  <Route index element={<ForumPosts />} key={index} />,
  <Route path={id} key={id}>
    <Route index element={<ForumPost />} />
  </Route>,
];
