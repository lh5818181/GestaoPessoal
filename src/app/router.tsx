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
    {/* Rotas públicas */}
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />

    {/* Rotas privadas: caminho base '/' */}
    <Route path="/" element={<PrivateRoute />}>
      <Route index element={<Dashboard />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="finance" element={<Transactions />} />
      <Route path="goals" element={<Goals />} />
      <Route path="tasks" element={<Tasks />} />
    </Route>

    {/* Catch-all */}
    <Route path="*" element={<Navigate to="/login" replace />} />
  </Routes>
);

export default Router;