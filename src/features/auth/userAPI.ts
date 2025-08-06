import apiClient from '../../services/apiClient';

export interface User {
  id: string;
  name: string;
  email: string;
}

export const fetchUser = async (): Promise<User> => {
  const { data } = await apiClient.get('/auth/me');
  return data;
};
