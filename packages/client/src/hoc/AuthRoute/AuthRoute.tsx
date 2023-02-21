import { Navigate, Outlet } from 'react-router-dom';
import { useGetUserQuery } from 'src/api/auth/auth';
import { paths } from 'src/App/constants';
import Spinner from 'src/components/Spinner';

const { menu } = paths;

const AuthRoute = () => {
  const { data, isLoading } = useGetUserQuery();

  if (isLoading) {
    return <Spinner />;
  }

  return data ? <Navigate to={menu} replace={true} /> : <Outlet />;
};

export default AuthRoute;
