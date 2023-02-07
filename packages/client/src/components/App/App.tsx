import { Route, Routes } from 'react-router-dom';
import Layout from 'src/hoc/Layout';
import PrivateRoute from 'src/hoc/PrivateRoute';
import { SignIn, SignUp, Welcome, Leaderboard } from 'src/pages';
import { paths } from './constants';

const { login, registration, leaderboard } = paths;

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
          <Route path="*" element={<div>404</div>} />

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
