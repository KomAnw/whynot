import { Route, Routes } from 'react-router-dom';
import Layout from 'src/hoc/Layout';
import PrivateRoute from 'src/hoc/PrivateRoute';
import { SignIn, SignUp, Welcome } from 'src/pages';
import { paths } from './constants';
import Page404 from 'pages/404';

const { login, registration } = paths;

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          {/* Общие */}
          <Route index element={<Welcome />} />
          <Route path={login} element={<SignIn />} />
          <Route path={registration} element={<SignUp />} />
          <Route path="*" element={<Page404 />} />

          {/* Приватные */}
          <Route path="/game" element={<PrivateRoute />}>
            <Route index element={<div>main game page</div>} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
