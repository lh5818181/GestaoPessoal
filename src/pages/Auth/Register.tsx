import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver as zodResolverRH } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useNavigate, Link } from 'react-router-dom';
import apiClient from '../../services/apiClient';
import toast from 'react-hot-toast';

const registerSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(6),
});
type RegisterData = z.infer<typeof registerSchema>;

const Register: React.FC = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<RegisterData>({
    resolver: zodResolverRH(registerSchema),
  });

  const onSubmit = async (data: RegisterData) => {
    try {
      // 1) Cria usuário
      const response = await apiClient.post('/auth/register', data);

      // 2) Feedback visual
      toast.success('Cadastro realizado com sucesso!');

      // 3) Auto-login opcional:
      // const { token } = response.data;
      // localStorage.setItem('token', token);
      // navigate('/dashboard');

      // 4) Redireciona para login manual
      navigate('/login');
    } catch (err: any) {
      toast.error(err?.response?.data?.message || 'Erro ao cadastrar');
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-lg shadow-md w-80 space-y-4">
        <h1 className="text-2xl font-bold text-center">Cadastre-se</h1>
        {/* Campos name, email, password... */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          {isSubmitting ? 'Cadastrando...' : 'Cadastrar'}
        </button>
        <p className="text-center text-sm">
          Já tem conta?{' '}
          <Link to="/login" className="text-blue-600 hover:underline">
            Entre aqui
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
