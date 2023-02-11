import { Route, Routes } from 'react-router-dom';
import Layout from 'src/hoc/Layout';
import PrivateRoute from 'src/hoc/PrivateRoute';
import { Game } from 'src/pages/Game';
import { SignIn, SignUp, Welcome, Leaderboard,  ErrorPage, Page404 } from 'src/pages';
import { paths } from './constants';

const { login, registration, game, leaderboard, page500 } = paths;

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
          <Route path={page500} element={<ErrorPage />} />
          <Route path="*" element={<Page404 />} />

          {/* Приватные */}
          <Route path={game} element={<PrivateRoute />}>
            <Route index element={<Game />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
