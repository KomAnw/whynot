import { useAppDispatch, useAppSelector } from 'src/hooks/redux';
import { getUser } from 'src/api/userAPI';

export const useAuth = async () => {
  const dispatch = useAppDispatch();

  await dispatch(getUser);

  const { user } = useAppSelector(state => state.user);

  return { user };
};
