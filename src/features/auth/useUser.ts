import { useQuery } from '@tanstack/react-query';
import { fetchUser, type User } from './userAPI';

export const useUser = () => {
  return useQuery<User, unknown>({
    queryKey: ['user'],
    queryFn: fetchUser,
    staleTime: 1000 * 60 * 10, // 10 min
    retry: false,
  });
};
