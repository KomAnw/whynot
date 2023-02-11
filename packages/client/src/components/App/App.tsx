import { Route, Routes } from 'react-router-dom';
import Layout from 'src/hoc/Layout';
import PrivateRoute from 'src/hoc/PrivateRoute';
import { SignIn, SignUp, Welcome, Leaderboard, ErrorPage, Page404 } from 'src/pages';
import { paths } from './constants';
import { gameRoutes } from 'src/pages/Game';
import { profileRoutes } from 'src/pages/Profile';
import { forumRoutes } from 'src/pages/Forum';
import Menu from 'src/pages/Menu';

const { login, registration, errorPage, game, forum, leaderboard, profile, menu } = paths;

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          {/* Общие */}
          <Route index element={<Welcome />} />
          <Route path={login} element={<SignIn />} />
          <Route path={registration} element={<SignUp />} />
          <Route path={errorPage} element={<ErrorPage />} />
          <Route path="*" element={<Page404 />} />

          {/* Приватные */}
          <Route element={<PrivateRoute />}>
            <Route path={menu} element={<Menu />} />
            <Route path={leaderboard} element={<Leaderboard />} />
            <Route path={game.index}>{gameRoutes}</Route>
            <Route path={profile.index}>{profileRoutes}</Route>
            <Route path={forum.index}>{forumRoutes}</Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
