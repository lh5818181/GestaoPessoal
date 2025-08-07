import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f9fafb; /* bg-gray-50 */
`;

export const Form = styled.form`
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  width: 20rem; /* w-80 */
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
`;

export const Label = styled.label`
  display: block;
  font-size: 0.875rem; /* text-sm */
  font-weight: 500;
`;

export const Input = styled.input`
  width: 100%;
  border: 1px solid #d1d5db; /* border-gray-300 */
  padding: 0.5rem;
  border-radius: 0.375rem;
  &:focus {
    outline: none;
    border-color: #2563eb; /* azul */
    box-shadow: 0 0 0 1px #2563eb;
  }
`;

export const ErrorText = styled.p`
  color: #dc2626; /* vermelho */
  font-size: 0.875rem;
`;

export const Button = styled.button<{ disabled?: boolean }>`
  width: 100%;
  background-color: ${({ disabled }) => (disabled ? '#60a5fa' : '#2563eb')};
  color: white;
  padding: 0.5rem;
  border-radius: 0.375rem;
  font-weight: 500;
  transition: background-color 0.2s;
  &:hover {
    background-color: ${({ disabled }) => (disabled ? '#60a5fa' : '#1d4ed8')};
  }
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
`;

export const InfoText = styled.p`
  text-align: center;
  font-size: 0.875rem;
`;

export const LinkStyled = styled.a`
  color: #2563eb;
  &:hover {
    text-decoration: underline;
  }
`;

export const LoadingMessage = styled.p`
  background-color: #dbeafe; /* azul claro */
  color: #1e3a8a; /* azul escuro */
  border: 1px solid #bfdbfe;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  font-weight: 500;
  text-align: center;
`;

export const ErrorMessage = styled.p`
  background-color: #fee2e2; /* vermelho claro */
  color: #991b1b; /* vermelho escuro */
  border: 1px solid #fecaca;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  font-weight: 500;
  text-align: center;
`;
