import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/Auth/index';
import Dashboard from '../pages/Dashboard/Dashboard';
import Transactions from '../pages/Finance/Transactions';
import Goals from '../pages/Goals/Goals';
import Tasks from '../pages/Tasks/Tasks';
import PrivateRoute from './PrivateRoute';

const Router: React.FC = () => (
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/" element={<Navigate to="/dashboard" replace />} />

    {/* Protegendo rotas com PrivateRoute */}
    <Route element={<PrivateRoute />}>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/finance" element={<Transactions />} />
      <Route path="/goals" element={<Goals />} />
      <Route path="/tasks" element={<Tasks />} />
    </Route>

    <Route path="*" element={<Navigate to="/login" replace />} />
  </Routes>
);

export default Router;