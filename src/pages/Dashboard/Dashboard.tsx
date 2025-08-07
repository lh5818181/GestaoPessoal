import React from 'react';
import Card from '../../components/Card';
import BalanceChart from '../Finance/BalanceChart';
import { useFinance } from '../../features/finance/useFinance';
import * as S from './Dashboard.styles';

const Dashboard: React.FC = () => {
  const { data: transactions, isLoading, error } = useFinance();

  if (isLoading) {
    return (
      <S.Container>
        <S.LoadingMessage>Carregando dashboard...</S.LoadingMessage>
      </S.Container>
    );
  }

  if (error) {
    return (
      <S.Container>
        <S.ErrorMessage>
          Nenhuma transação disponível no momento.
        </S.ErrorMessage>
      </S.Container>
    );
  }

  const validTransactions = Array.isArray(transactions) ? transactions : [];

  const chartData = validTransactions.reduce<
    { date: string; balance: number }[]
  >((acc, tx) => {
    const last = acc.length ? acc[acc.length - 1].balance : 0;
    const newBalance =
      last + (tx.type === 'income' ? tx.amount : -tx.amount);
    acc.push({ date: tx.date, balance: newBalance });
    return acc;
  }, []);

  return (
    <S.Container>
      <S.Title>Dashboard</S.Title>

      <S.Grid>
        <S.ChartCard>
          <Card>
            <S.SectionTitle>Balance Over Time</S.SectionTitle>
            <BalanceChart data={chartData} />
          </Card>
        </S.ChartCard>

        <Card>
          <S.SectionTitle>Quick Actions</S.SectionTitle>
          {/* inserir botões de ação */}
        </Card>
      </S.Grid>
    </S.Container>
  );
};

export default Dashboard;
