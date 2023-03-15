import Spinner from 'components/Spinner';
import { useLocation, useNavigate } from 'react-router-dom';
import { useYandexOAuthMutation } from 'src/api/oauth/oauth';
import { useDidMount } from 'src/hooks/react';
import { paths } from 'components/App/constants';

const { menu } = paths;

const OAuth = () => {
  const [OAuthYandexSignIn] = useYandexOAuthMutation();
  const { search } = useLocation();
  const code = search.split('=')[1];
  const navigate = useNavigate();
  const oAuthHandler = async (): Promise<void> => {
    const response = await OAuthYandexSignIn({
      code,
      redirect_uri: 'http://localhost:3000/oauth',
    });

    if (response) {
      navigate(menu);
    }
  };

  useDidMount(() => {
    oAuthHandler();
  });

  return <Spinner />;
};

export default OAuth;
