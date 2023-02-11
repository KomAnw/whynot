import { Route, Routes } from 'react-router-dom';
import Layout from 'src/hoc/Layout';
import PrivateRoute from 'src/hoc/PrivateRoute';
import { Game } from 'src/pages/Game';
import { SignIn, SignUp, Welcome, Leaderboard, ErrorPage, GameMenu } from 'src/pages';
import NotFoundPage from 'pages/404';
import { paths } from './constants';

const {
  login,
  registration,
  errorPage,
  game,
  play,
  end,
  forum,
  newThread,
  thread,
  editThread,
  leaderboard,
  tutorial,
  profile,
  profileUpdateData,
  profileUpdateAvatar,
} = paths;

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          {/* Общие */}
          <Route index element={<Welcome />} />
          <Route path={login} element={<SignIn />} />
          <Route path={registration} element={<SignUp />} />
          <Route path={leaderboard} element={<Leaderboard />} />
          <Route path={errorPage} element={<ErrorPage />} />
          <Route path="*" element={<NotFoundPage />} />

          {/* Приватные */}
          <Route path={game} element={<GameMenu />}>
            <Route index element={<Game />} />
            <Route path={play} element={<div>Страница игры(canvas)</div>} />
            <Route path={end} element={<div>Страница конца игры</div>} />
          </Route>
          <Route path={forum} element={<PrivateRoute />}>
            <Route index element={<div>Страница со списком всех тем</div>} />
            <Route path={newThread} element={<div>Страница создания новой темы</div>} />
            <Route path={thread} element={<div>Страница с обсуждениями темы1</div>}>
              <Route path={editThread} element={<div>Страница изменения темы</div>} />
            </Route>
          </Route>
          <Route path={leaderboard} element={<PrivateRoute />}>
            <Route index element={<Leaderboard />} />
          </Route>
          <Route path={tutorial} element={<PrivateRoute />}>
            <Route index element={<div>tutorial</div>} />
          </Route>
          <Route path={profile} element={<PrivateRoute />}>
            <Route index element={<div>Страница профиля пользователя</div>} />
            <Route path={profileUpdateData} element={<div>Страница обновления данных пользователя</div>} />
            <Route path={profileUpdateAvatar} element={<div>Страница обновления аватара</div>} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
