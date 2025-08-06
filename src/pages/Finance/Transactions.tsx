import React from 'react';
import { useFinance } from '../../features/finance/useFinance';
import Card from '../../components/Card';
import { format } from 'date-fns';

const Transactions: React.FC = () => {
  const { data, isLoading, error } = useFinance();

  if (isLoading) return <p>Carregando...</p>;
  if (error) return <p>Erro ao carregar transações.</p>;

  return (
    <div className="space-y-4">
      {data?.map(tx => (
        <Card key={tx.id} className="flex justify-between items-center">
          <div>
            <p className="font-medium">{tx.description}</p>
            <p className="text-sm text-gray-500">{format(new Date(tx.date), 'dd/MM/yyyy')}</p>
          </div>
          <p className={`${tx.type === 'income' ? 'text-green-600' : 'text-red-600'}`}>R$ {tx.amount.toFixed(2)}</p>
        </Card>
      ))}
    </div>
  );
};

export default Transactions;