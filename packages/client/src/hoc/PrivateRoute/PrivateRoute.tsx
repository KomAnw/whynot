import { Navigate, Outlet } from 'react-router-dom';
import { useGetUserQuery } from 'src/api/auth/auth';
import { paths } from 'src/components/App/constants';
import Spinner from 'src/components/Spinner';
import { useAppDispatch } from 'src/hooks/redux';
import { getTheme } from 'src/api/theme/theme';
import { getMode } from 'src/api/mode/mode';

const { welcome } = paths;

const PrivateRoute = () => {
  const dispatch = useAppDispatch();
  const { isLoading, data } = useGetUserQuery();

  if (isLoading) {
    return <Spinner />;
  }

  if (data) {
    dispatch(getTheme(data.id));
    dispatch(getMode(data.id));
  }

  return data ? <Outlet /> : <Navigate to={welcome} replace={true} />;
};

export default PrivateRoute;
