import { Navigate, Outlet } from 'react-router-dom';
import { paths } from 'src/components/App/constants';
import { useAuth } from 'src/hooks/useAuth';

const { login } = paths;

const PrivateRoute = () => {
  const { isAuth } = useAuth();

  return isAuth ? <Outlet /> : <Navigate to={login} replace={true} />;
};

export default PrivateRoute;
