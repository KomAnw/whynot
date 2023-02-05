import { TestComponent } from 'components/TestComponent/TestComponent';
import { TestComponent } from 'components/TestComponent/TestComponent';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from 'src/hoc/PrivateRoute';
import { SignIn, SignUp, Welcome } from 'src/pages';
import { paths } from './constants';

const { welcome, login, registration } = paths;
const { welcome, login, registration } = paths;

function App() {
  return (
    <>
      <Routes>
        {/* Общие */}
        <Route path={welcome} element={<Welcome />} />
        <Route path={login} element={<SignIn />} />
        <Route path={registration} element={<SignUp />} />
        {/* Общие */}
        <Route path={welcome} element={<Welcome />} />
        <Route path={login} element={<SignIn />} />
        <Route path={registration} element={<SignUp />} />

          {/* Приватные */}
          <Route path="game" element={<PrivateRoute />}>
            <Route index element={<div>main game page</div>} />
          </Route>
        </Route>
      </Routes>
      <TestComponent />
      <TestComponent />
    </>
  );
  );
}

export default App;
export default App;
