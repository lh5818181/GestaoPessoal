import { useQuery } from '@tanstack/react-query';
import apiClient from '../../services/apiClient';

type User = {
  id: string;
  name: string;
  email: string;
};

export const useUser = () => {
  return useQuery<User, unknown>({
    queryKey: ['user'],
    queryFn: async () => {
      const response = await apiClient.get('/auth/me');
      return response.data.user; // ← importante: ajuste para bater com a resposta do backend
    },
    staleTime: 1000 * 60 * 10, // 10 minutos
    retry: false, // não tenta de novo se der erro (ex: token inválido)
  });
};
