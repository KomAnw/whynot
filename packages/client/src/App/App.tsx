import { Route, Routes } from 'react-router-dom';
import Layout from 'src/hoc/Layout';
import PrivateRoute from 'src/hoc/PrivateRoute';
import { SignUp, Welcome, Leaderboard, GameMenu, Settings, SignIn, Page404 } from 'src/pages';
import { gameRoutes } from 'src/pages/Game';
import { profileRoutes } from 'src/pages/Profile';
import { forumRoutes } from 'src/pages/Forum';
import Logout from 'src/pages/Logout';
import { paths } from './constants';
import AuthRoute from 'src/hoc/AuthRoute';

const { login, registration, game, forum, leaderboard, profile, menu, logout, settings } = paths;

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* Общие */}
        <Route element={<AuthRoute />}>
          <Route index element={<Welcome />} />
          <Route path={login} element={<SignIn />} />
          <Route path={registration} element={<SignUp />} />
        </Route>

        {/* Приватные */}
        <Route element={<PrivateRoute />}>
          <Route path={menu} element={<GameMenu />} />
          <Route path={leaderboard} element={<Leaderboard />} />
          <Route path={game.index}>{gameRoutes}</Route>
          <Route path={profile.index}>{profileRoutes}</Route>
          <Route path={forum.index}>{forumRoutes}</Route>
          <Route path={logout} element={<Logout />} />
          <Route path={settings} element={<Settings />} />
        </Route>

        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  );
}

export default App;
