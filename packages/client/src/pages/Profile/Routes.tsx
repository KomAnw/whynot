import { lazy } from 'react';
import { Route } from 'react-router-dom';
import { paths } from 'src/App/constants';
import WithSuspense from 'src/hoc/WithSuspence';

const { updateData, updatePassword, index } = paths.profile;
const Profile = WithSuspense(lazy(() => import('./Profile')));
const ProfilePassword = WithSuspense(lazy(() => import('./pages/ProfileUpdatePassword')));
const ProfileUpdateData = WithSuspense(lazy(() => import('./pages/ProfileUpdateData')));

export const routes = [
  <Route index element={<Profile />} key={index} />,
  <Route path={updateData} element={<ProfileUpdateData />} key={updateData} />,
  <Route path={updatePassword} element={<ProfilePassword />} key={updatePassword} />,
];
