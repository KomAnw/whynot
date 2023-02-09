import { useAppDispatch, useAppSelector } from 'src/hooks/redux';
import { getUser } from 'src/api/userAPI';

export const useAuth = () => {
  const { user } = useAppSelector(state => state.user);

  const dispatch = useAppDispatch();

  dispatch(getUser);

  return { isAuth: !!user };
};
