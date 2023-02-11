import { Route, Routes } from 'react-router-dom';
import Layout from 'src/hoc/Layout';
import PrivateRoute from 'src/hoc/PrivateRoute';
import { GameRoutes } from 'src/pages/Game';
import { SignIn, SignUp, Welcome, Leaderboard, ErrorPage } from 'src/pages';
import NotFoundPage from 'pages/404';
import { paths } from './constants';
import { ProfileRoutes } from 'src/pages/Profile';
import Menu from 'src/pages/Menu';
import { ForumRoutes } from 'src/pages/Forum';

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
          <Route path="*" element={<NotFoundPage />} />

          {/* Приватные */}
          <Route element={<PrivateRoute />}>
            <Route path={menu} element={<Menu />} />
            <Route path={leaderboard} element={<Leaderboard />} />
            <Route path={game.index}>{GameRoutes}</Route>
            <Route path={profile.index}>{ProfileRoutes}</Route>
            <Route path={forum.index}>{ForumRoutes}</Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
