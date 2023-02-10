import { Route, Routes } from 'react-router-dom';
import Layout from 'src/hoc/Layout';
import PrivateRoute from 'src/hoc/PrivateRoute';
import { SignIn, SignUp, Welcome } from 'src/pages';
import { paths } from './constants';
import Profile from 'src/pages/Profile'
import ProfileEditData from 'pages/ProfileEditData';
import ProfileEditPassword from 'pages/ProfileEditPassword';

const { login, registration, game, profile, profileEditData, profileEditPassword } = paths;

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          {/* Общие */}
          <Route index element={<Welcome />} />
          <Route path={login} element={<SignIn />} />
          <Route path={registration} element={<SignUp />} />
          <Route path="*" element={<div>404</div>} />

          {/* Приватные */}
          <Route path={game} element={<PrivateRoute />}>
            <Route index element={<div>main game page</div>} />
          </Route>
          <Route path={profile} element={<PrivateRoute />}>
            <Route index element={<Profile />} />
          </Route>
          <Route path={profileEditData} element={<PrivateRoute />}>
            <Route index element={<ProfileEditData />} />
          </Route>
          <Route path={profileEditPassword} element={<PrivateRoute />}>
            <Route index element={<ProfileEditPassword />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
