import { Route, Routes } from 'react-router-dom';
import Layout from 'src/hoc/Layout';
import PrivateRoute from 'src/hoc/PrivateRoute';
import { SignIn, SignUp, Welcome, Leaderboard, ErrorPage, GameMenu, Settings } from 'src/pages';
import NotFoundPage from 'pages/404';
import { gameRoutes } from 'src/pages/Game';
import { profileRoutes } from 'src/pages/Profile';
import { forumRoutes } from 'src/pages/Forum';
import Logout from 'src/pages/Logout';
import { paths } from './constants';

const { login, registration, errorPage, game, forum, leaderboard, profile, menu, logout, settings } = paths;

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          {/* Общие */}
          <Route index element={<Welcome />} />
          {/*<Route path={game.index}>{gameRoutes}</Route>*/}
          <Route path={login} element={<SignIn />} />
          <Route path={registration} element={<SignUp />} />
          <Route path={errorPage} element={<ErrorPage />} />

          {/* Приватные */}
          <Route element={<PrivateRoute />}>
            <Route path={menu} element={<GameMenu />} />
            <Route path={leaderboard} element={<Leaderboard />} />
            {/*<Route path={game.index}>{gameRoutes}</Route>*/}
            <Route path={profile.index}>{profileRoutes}</Route>
            <Route path={forum.index}>{forumRoutes}</Route>
            <Route path={logout} element={<Logout />} />
            <Route path={settings} element={<Settings />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
