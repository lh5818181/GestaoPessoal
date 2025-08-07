import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver as zodResolverRH } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useNavigate, Link } from 'react-router-dom';
import apiClient from '../../services/apiClient';
import toast from 'react-hot-toast';
import * as S from './Auth.styles';

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

  const onSubmit = async (data: RegisterData) => {
    try {
      await apiClient.post('/auth/register', data);
      toast.success('Cadastro realizado com sucesso!');
      navigate('/login');
    } catch (err: any) {
      const message = err?.response?.data?.message || 'Erro ao cadastrar';
      toast.error(message);
      console.error('Register error:', err);
    }
  };

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.Title>Cadastre-se</S.Title>

        {/* Nome */}
        <div>
          <S.Label>Nome</S.Label>
          <S.Input type="text" {...formRegister('name')} />
          {errors.name && <S.ErrorText>{errors.name.message}</S.ErrorText>}
        </div>

        {/* Email */}
        <div>
          <S.Label>Email</S.Label>
          <S.Input type="email" {...formRegister('email')} />
          {errors.email && <S.ErrorText>{errors.email.message}</S.ErrorText>}
        </div>

        {/* Senha */}
        <div>
          <S.Label>Senha</S.Label>
          <S.Input type="password" {...formRegister('password')} />
          {errors.password && (
            <S.ErrorText>{errors.password.message}</S.ErrorText>
          )}
        </div>

        <S.Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Cadastrando...' : 'Cadastrar'}
        </S.Button>

        <S.InfoText>
          Já tem conta?{' '}
          <Link to="/login">
            <S.LinkStyled>Entre aqui</S.LinkStyled>
          </Link>
        </S.InfoText>
      </S.Form>
    </S.Container>
  );
};

export default Register;
