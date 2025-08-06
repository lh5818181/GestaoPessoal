
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { login, type LoginPayload, type LoginResponse } from './authAPI';

export const useAuth = () => {
  const qc = useQueryClient();

  const mutation = useMutation<LoginResponse, unknown, LoginPayload>({
    mutationFn: login,
    onSuccess: data => {
      localStorage.setItem('token', data.token);
      qc.invalidateQueries({ queryKey: ['user'] });
    },
  });

  return {
    mutateAsync: mutation.mutateAsync,
    isLoading: mutation.status === 'pending',
  };
};
