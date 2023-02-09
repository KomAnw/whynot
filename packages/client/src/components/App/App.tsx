import { Route, Routes } from 'react-router-dom';
import Layout from 'src/hoc/Layout';
import PrivateRoute from 'src/hoc/PrivateRoute';
import { SignIn, SignUp, Welcome, ErrorPage } from 'src/pages';
import { paths } from './constants';
import Page404 from 'pages/404';

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
            <Route index element={<div>main game page</div>} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
