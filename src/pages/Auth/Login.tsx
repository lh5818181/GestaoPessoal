import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver as zodResolverRH } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../features/auth/useAuth';
import {
  Container,
  Form,
  Title,
  Label,
  Input,
  Error,
  Button,
  SmallText,
  StyledLink,
} from './styles';

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
      // O erro já é tratado no hook (toast)
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title>Login</Title>

        <div>
          <Label>Email</Label>
          <Input type="email" {...register('email')} />
          <Error>{errors.email?.message}</Error>
        </div>

        <div>
          <Label>Senha</Label>
          <Input type="password" {...register('password')} />
          <Error>{errors.password?.message}</Error>
        </div>

        <Button type="submit" disabled={isLoading}>
          {isLoading ? 'Entrando...' : 'Entrar'}
        </Button>

        <SmallText>
          Não tem conta? <StyledLink to="/register">Cadastre-se</StyledLink>
        </SmallText>
      </Form>
    </Container>
  );
};

export default Login;
