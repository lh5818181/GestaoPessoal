import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver as zodResolverRH } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useNavigate, Link } from 'react-router-dom';
import apiClient from '../../services/apiClient';
import toast from 'react-hot-toast';

// 1) Esquema Zod para validação dos campos
const registerSchema = z.object({
  name: z.string().min(2, 'Nome deve ter ao menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'Senha deve ter ao menos 6 caracteres'),
});

type RegisterData = z.infer<typeof registerSchema>;

const Register: React.FC = () => {
  const navigate = useNavigate();
  const {
    register: formRegister,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterData>({
    resolver: zodResolverRH(registerSchema),
  });

  // 2) Função que trata a submissão do formulário
  const onSubmit = async (data: RegisterData) => {
    try {
      // Chama a API de registro
      const response = await apiClient.post('/auth/register', data);

      // Feedback visual de sucesso
      toast.success('Cadastro realizado com sucesso!');

      // 3) [Opcional] Auto-login imediato:
      // const { token } = response.data;
      // localStorage.setItem('token', token);
      // navigate('/dashboard');

      // 4) Redireciona para a página de login
      navigate('/login');
    } catch (err: any) {
      // Mostra mensagem de erro vindo da API ou genérica
      const message = err?.response?.data?.message || 'Erro ao cadastrar';
      toast.error(message);
      console.error('Register error:', err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-lg shadow-md w-80 space-y-4"
      >
        <h1 className="text-2xl font-bold text-center">Cadastre-se</h1>

        {/* Campo Nome */}
        <div>
          <label className="block text-sm">Nome</label>
          <input
            type="text"
            {...formRegister('name')}
            className="w-full border p-2 rounded"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        {/* Campo Email */}
        <div>
          <label className="block text-sm">Email</label>
          <input
            type="email"
            {...formRegister('email')}
            className="w-full border p-2 rounded"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* Campo Senha */}
        <div>
          <label className="block text-sm">Senha</label>
          <input
            type="password"
            {...formRegister('password')}
            className="w-full border p-2 rounded"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        {/* Botão de Envio */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 disabled:opacity-50"
        >
          {isSubmitting ? 'Cadastrando...' : 'Cadastrar'}
        </button>

        {/* Link para login */}
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
