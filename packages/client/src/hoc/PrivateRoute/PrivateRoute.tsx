import { Navigate, Outlet } from 'react-router-dom';
import { paths } from 'src/components/App/constants';

const { login } = paths;

const PrivateRoute = () => {
  // TODO useAuth hook *const auth = useAuth();*
  const auth = true;

  return auth ? <Outlet /> : <Navigate to={login} />;
};

export default PrivateRoute;
