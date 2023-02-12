import { Navigate, Outlet } from 'react-router-dom';
import { useGetUserQuery } from 'src/api/auth/auth';
import { paths } from 'src/components/App/constants';

const { login } = paths;

const PrivateRoute = () => {

  const { isLoading, data} = useGetUserQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return data ? <Outlet /> : <Navigate to={login} replace={true} />;
};

export default PrivateRoute;
