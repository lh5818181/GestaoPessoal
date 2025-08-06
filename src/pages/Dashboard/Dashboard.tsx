import React from 'react';
import Card from '../../components/Card';
import BalanceChart from '../Finance/BalanceChart';
import { useFinance } from '../../features/finance/useFinance';

const Dashboard: React.FC = () => {
  const { data: transactions = [] } = useFinance();

  // Calcular saldo diário
  const chartData = transactions.reduce<{ date: string; balance: number; }[]>((acc, tx) => {
    const last = acc.length ? acc[acc.length - 1].balance : 0;
    const newBalance = last + (tx.type === 'income' ? tx.amount : -tx.amount);
    acc.push({ date: tx.date, balance: newBalance });
    return acc;
  }, []);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="col-span-2">
          <h2 className="text-xl font-semibold mb-2">Balance Over Time</h2>
          <BalanceChart data={chartData} />
        </Card>
        <Card>
          <h2 className="text-xl font-semibold mb-2">Quick Actions</h2>
          {/* inserir botões de ação */}
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;