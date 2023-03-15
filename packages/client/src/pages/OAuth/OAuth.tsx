import Spinner from 'components/Spinner';
import { useLocation, useNavigate } from 'react-router-dom';
import { REDIRECT_URL, useYandexOAuthMutation } from 'src/api/oauth/oauth';
import { useDidMount } from 'src/hooks/react';
import { paths } from 'components/App/constants';

const { menu } = paths;

const OAuth = () => {
  const [OAuthYandexSignIn] = useYandexOAuthMutation();
  const { search } = useLocation();
  const code = search.split('=')[1];
  const navigate = useNavigate();
  const OAuthHandler = async (): Promise<void> => {
    const response = await OAuthYandexSignIn({
      code,
      redirect_uri: REDIRECT_URL,
    });

    if (response) {
      navigate(menu);
    }
  };

  useDidMount(() => {
    OAuthHandler();
  });

  return <Spinner />;
};

export default OAuth;
