// src/app/router.tsx

import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/Auth/index';
import Register from '../pages/Auth/Register';
import Dashboard from '../pages/Dashboard/Dashboard';
import Transactions from '../pages/Finance/Transactions';
import Goals from '../pages/Goals/Goals';
import Tasks from '../pages/Tasks/Tasks';
import PrivateRoute from './PrivateRoute';

const Router: React.FC = () => (
  <Routes>
    {/* --- Rotas públicas --- */}
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />

    {/* --- Redirecionamento padrão --- */}
    <Route path="/" element={<Navigate to="/login" replace />} />

    {/* --- Rotas privadas, cada uma envolvida pelo PrivateRoute --- */}
    <Route
      path="/dashboard"
      element={
        <PrivateRoute>
          <Dashboard />
        </PrivateRoute>
      }
    />
    <Route
      path="/finance"
      element={
        <PrivateRoute>
          <Transactions />
        </PrivateRoute>
      }
    />
    <Route
      path="/goals"
      element={
        <PrivateRoute>
          <Goals />
        </PrivateRoute>
      }
    />
    <Route
      path="/tasks"
      element={
        <PrivateRoute>
          <Tasks />
        </PrivateRoute>
      }
    />

    {/* --- Qualquer outra URL cai no login --- */}
    <Route path="*" element={<Navigate to="/login" replace />} />
  </Routes>
);

export default Router;
