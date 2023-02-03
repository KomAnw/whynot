import { TestComponent } from 'components/TestComponent/TestComponent';

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          {/* Общие */}
          <Route index element={<Welcome />} />
          <Route path={login} element={<SignIn />} />
          <Route path={registration} element={<SignUp />} />
          <Route path="*" element={<div>404</div>} />

          {/* Приватные */}
          <Route path="/game" element={<PrivateRoute />}>
            <Route index element={<div>main game page</div>} />
          </Route>
        </Route>
      </Routes>
    </>
  );
  );
}

export default App;
export default App;
