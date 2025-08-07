import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver as zodResolverRH } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../features/auth/useAuth';
import * as S from './Auth.styles';

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});
type LoginData = z.infer<typeof loginSchema>;

const Login: React.FC = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolverRH(loginSchema),
  });

  const { mutateAsync, isLoading } = useAuth();

  const onSubmit = async (data: LoginData) => {
    try {
      await mutateAsync(data);
      navigate('/dashboard');
    } catch {
      // Toast já trata erro no hook
    }
  };

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.Title>Login</S.Title>

        <div>
          <S.Label>Email</S.Label>
          <S.Input type="email" {...register('email')} />
          {errors.email && <S.ErrorText>{errors.email.message}</S.ErrorText>}
        </div>

        <div>
          <S.Label>Senha</S.Label>
          <S.Input type="password" {...register('password')} />
          {errors.password && (
            <S.ErrorText>{errors.password.message}</S.ErrorText>
          )}
        </div>

        <S.Button type="submit" disabled={isLoading}>
          {isLoading ? 'Entrando...' : 'Entrar'}
        </S.Button>

        <S.InfoText>
          Não tem conta?{' '}
          <Link to="/register">
            <S.LinkStyled>Cadastre-se</S.LinkStyled>
          </Link>
        </S.InfoText>
      </S.Form>
    </S.Container>
  );
};

export default Login;
