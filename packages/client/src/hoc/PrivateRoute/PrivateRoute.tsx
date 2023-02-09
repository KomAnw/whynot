import { Navigate, Outlet } from 'react-router-dom';
import { paths } from 'src/components/App/constants';
import { useGetUserQuery } from 'src/api/authAPI';

const { login } = paths;

const PrivateRoute = () => {
  const { isLoading, data } = useGetUserQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return data ? <Outlet /> : <Navigate to={login} replace={true} />;
};

export default PrivateRoute;
