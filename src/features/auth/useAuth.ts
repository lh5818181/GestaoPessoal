import { useMutation, useQueryClient } from '@tanstack/react-query';
import { login, type LoginPayload, type LoginResponse } from './authAPI';
import toast from 'react-hot-toast';

export const useAuth = () => {
  const qc = useQueryClient();

  const mutation = useMutation<LoginResponse, unknown, LoginPayload>({
    mutationFn: login,
    onSuccess: (data) => {
      // Salva token
      localStorage.setItem('token', data.token);
      // Atualiza o cache do usuário logado
      qc.invalidateQueries({ queryKey: ['user'] });
      toast.success('Login realizado com sucesso!');
    },
    onError: (error: any) => {
      // Mostra mensagem de erro
      const message = error?.response?.data?.message || 'Erro ao fazer login';
      toast.error(message);
    },
  });

  return {
    mutateAsync: mutation.mutateAsync,
    isLoading: mutation.status === 'pending',
  };
};
