import { Route, Routes } from 'react-router-dom';
import Layout from 'src/hoc/Layout';
import PrivateRoute from 'src/hoc/PrivateRoute';
import { Game } from 'src/pages/Game';
import { SignIn, SignUp, Welcome, ErrorPage } from 'src/pages';
import Page404 from 'pages/404';
import { paths } from './constants';

const { login, registration, game, page500 } = paths;

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          {/* Общие */}
          <Route index element={<Welcome />} />
          <Route path={login} element={<SignIn />} />
          <Route path={registration} element={<SignUp />} />
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
