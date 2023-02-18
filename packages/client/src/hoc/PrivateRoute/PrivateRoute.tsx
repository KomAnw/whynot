import { Navigate, Outlet } from 'react-router-dom';
import { paths } from 'src/components/App/constants';
import Spinner from 'src/components/Spinner';

const { login } = paths;

const PrivateRoute = () => {
  const isLoading = false;
  const data = true;

  if (isLoading) {
    return <Spinner />;
  }

  return data ? <Outlet /> : <Navigate to={login} replace={true} />;
};

export default PrivateRoute;
