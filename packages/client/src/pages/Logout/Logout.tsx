import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { authApi, useLogoutMutation } from 'src/api/auth/auth';
import { paths } from 'src/components/App/constants';
import Spinner from 'src/components/Spinner';
import { useAppDispatch } from 'src/hooks/redux';

const { welcome, errorPage } = paths;

const Logout = () => {
  const [logout] = useLogoutMutation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    logout()
      .unwrap()
      .catch(() => navigate(errorPage))
      .finally(() => {
        dispatch(authApi.util.resetApiState());
        navigate(welcome);
      });
  }, [dispatch, logout, navigate]);

  return <Spinner />;
};

export default Logout;
