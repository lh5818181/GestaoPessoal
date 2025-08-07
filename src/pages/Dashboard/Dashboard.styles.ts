import styled from 'styled-components';

export const Container = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Title = styled.h1`
  font-size: 1.875rem; /* 3xl */
  font-weight: bold;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const ChartCard = styled.div`
  grid-column: span 1;

  @media (min-width: 768px) {
    grid-column: span 2;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 1.25rem; /* xl */
  font-weight: 600;
  margin-bottom: 0.5rem;
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

export const LoadingMessage = styled.p`
  background-color: #dbeafe; /* azul claro */
  color: #1e3a8a; /* azul escuro */
  border: 1px solid #bfdbfe;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  font-weight: 500;
  text-align: center;
`;