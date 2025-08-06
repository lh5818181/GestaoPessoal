import { useQuery } from '@tanstack/react-query';
import { getGoals, type Goal } from './goalsAPI';

export const useGoals = () => {
  return useQuery<Goal[], unknown>({
    queryKey: ['goals'],
    queryFn: getGoals,
    staleTime: 1000 * 60 * 5,
  });
};