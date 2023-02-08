import { Navigate, Outlet } from 'react-router-dom';
import { paths } from 'src/components/App/constants';
import { useAuth } from 'src/hooks/useAuth';

const { login } = paths;

const PrivateRoute = async () => {
  const { user } = await useAuth();

  return user ? <Outlet /> : <Navigate to={login} />;
};

export default PrivateRoute;
