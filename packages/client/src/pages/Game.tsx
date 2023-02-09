import { useEffect } from 'react';
import { useGetUserQuery } from 'src/api/authAPI';

export const Game = () => {
  const { data } = useGetUserQuery();

  useEffect(() => {
    console.log(data);
  }, []);
  return <div>Game page</div>;
};
