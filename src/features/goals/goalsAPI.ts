import apiClient from '../../services/apiClient';

export interface Goal {
  id: string;
  title: string;
  targetDate: string;
  progress: number;
}

export const getGoals = async (): Promise<Goal[]> => {
  const { data } = await apiClient.get('/goals');
  return data;
};