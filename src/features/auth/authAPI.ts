import apiClient from '../../services/apiClient';

export interface LoginPayload { email: string; password: string; }
export interface LoginResponse { token: string; user: { id: string; name: string; email: string; } }

export const login = async (payload: LoginPayload): Promise<LoginResponse> => {
  const { data } = await apiClient.post('/auth/login', payload);
  return data;
};