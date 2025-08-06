import apiClient from '../../services/apiClient';

export interface Task {
  id: string;
  description: string;
  completed: boolean;
}

export const getTasks = async (): Promise<Task[]> => {
  const { data } = await apiClient.get('/tasks');
  return data;
};