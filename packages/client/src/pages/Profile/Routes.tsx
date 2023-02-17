import { Route } from 'react-router-dom';
import { paths } from 'src/components/App/constants';
import ProfilePassword from 'src/components/Forms/ProfilePassword/ProfilePassword';
import ProfileUpdateData from './pages/ProfileUpdateData';
import Profile from './Profile';

const { updateData, updatePassword, index } = paths.profile;

export const routes = [
  <Route index element={<Profile />} key={index} />,
  <Route path={updateData} element={<ProfileUpdateData />} key={updateData} />,
  <Route path={updatePassword} element={<ProfilePassword />} key={updatePassword} />,
];
