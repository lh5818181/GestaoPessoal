// src/app/PrivateRoute.tsx

import React, { type PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';
import { useUser } from '../features/auth/useUser';
import toast from 'react-hot-toast';

interface PrivateRouteProps extends PropsWithChildren {
  children: React.ReactElement;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { data: user, isLoading, isError } = useUser();

  if (isLoading) {
    return <p>Carregando...</p>;
  }

  if (isError || !user) {
    toast.error('Sessão expirada. Faça login.');
    localStorage.removeItem('token');
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoute;
