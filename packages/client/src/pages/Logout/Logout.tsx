import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLogoutMutation } from 'src/api/auth/auth';
import { paths } from 'src/components/App/constants';
import Spinner from 'src/components/Spinner';

const { login, errorPage } = paths;

const Logout = () => {
  const [logout] = useLogoutMutation();
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      logout()
        .unwrap()
        .catch(() => navigate(errorPage))
        .finally(() => navigate(login));
    }, 800);
  }, []);

  return <Spinner />;
};

export default Logout;
