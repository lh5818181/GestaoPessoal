import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver as zodResolverRH } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../features/auth/useAuth';

const loginSchema = z.object({ email: z.string().email(), password: z.string().min(6) });
type LoginData = z.infer<typeof loginSchema>;

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<LoginData>({ resolver: zodResolverRH(loginSchema) });
  const { mutateAsync, isLoading } = useAuth();

  const onSubmit = async (data: LoginData) => {
    try {
      await mutateAsync(data);
      navigate('/dashboard');
    } catch (err) {
      // feedback de erro
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-lg shadow-md w-80 space-y-4">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <div>
          <label className="block text-sm">Email</label>
          <input type="email" {...register('email')} className="w-full border p-2 rounded"/>
          <p className="text-red-500 text-sm">{errors.email?.message}</p>
        </div>
        <div>
          <label className="block text-sm">Senha</label>
          <input type="password" {...register('password')} className="w-full border p-2 rounded"/>
          <p className="text-red-500 text-sm">{errors.password?.message}</p>
        </div>
        <button type="submit" disabled={isLoading} className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          {isLoading ? 'Entrando...' : 'Entrar'}
        </button>
        <p className="text-center text-sm">
          Não tem conta?{' '}
          <Link to="/register" className="text-blue-600 hover:underline">
            Cadastre-se
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;