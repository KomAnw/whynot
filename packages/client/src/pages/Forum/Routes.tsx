import { lazy } from 'react';
import { Route } from 'react-router-dom';
import { paths } from 'src/components/App/constants';
import WithSuspense from 'src/hoc/WithSuspence';

const { id, index } = paths.forum;
const ForumPosts = WithSuspense(lazy(() => import('./pages/ForumPosts/ForumPosts')));
const ForumMessages = WithSuspense(lazy(() => import('./pages/ForumMessages/ForumMessages')));

export const routes = [
  <Route index element={<ForumPosts />} key={index} />,
  <Route path={id} key={id}>
    <Route index element={<ForumMessages />} />
  </Route>,
];
