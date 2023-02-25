import { Navigate, Outlet } from 'react-router-dom';
import { useGetUserQuery } from 'src/api/auth/auth';
import { paths } from 'src/components/App/constants';
import Spinner from 'src/components/Spinner';

const { welcome } = paths;

const PrivateRoute = () => {
  const { isLoading, data } = useGetUserQuery();

  if (isLoading) {
    return <Spinner />;
  }

  return data ? <Outlet /> : <Navigate to={welcome} replace={true} />;
};

export default PrivateRoute;
