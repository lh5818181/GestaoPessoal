import { useQuery } from '@tanstack/react-query';
import { getTasks, type Task } from './tasksAPI';

export const useTasks = () => {
  return useQuery<Task[], unknown>({
    queryKey: ['tasks'],
    queryFn: getTasks,
    staleTime: 1000 * 60 * 5,
  });
};