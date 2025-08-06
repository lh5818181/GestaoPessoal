import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useUser } from '../features/auth/useUser';
import toast from 'react-hot-toast';

const PrivateRoute: React.FC = () => {
  const { data: user, isLoading, isError } = useUser();

  if (isLoading) {
    return <p>Carregando...</p>; // ou skeleton de loading
  }

  if (isError || !user) {
    toast.error('Sessão expirada. Faça login.');
    localStorage.removeItem('token');
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default PrivateRoute;
