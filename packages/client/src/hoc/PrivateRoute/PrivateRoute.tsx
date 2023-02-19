import { Navigate, Outlet } from 'react-router-dom';
import { useGetUserQuery } from 'src/api/auth/auth';
import { paths } from 'src/App/constants';
import Spinner from 'src/components/Spinner';

const { login } = paths;

const PrivateRoute = () => {
  const { isLoading, data } = useGetUserQuery();

  if (isLoading) {
    return <Spinner />;
  }

  return data ? <Outlet /> : <Navigate to={login} replace={true} />;
};

export default PrivateRoute;
