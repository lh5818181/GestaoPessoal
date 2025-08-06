import React from 'react';
import { useGoals } from '../../features/goals/useGoals';
import Card from '../../components/Card';
import { format } from 'date-fns';

const Goals: React.FC = () => {
  const { data: goals = [], isLoading, error } = useGoals();

  if (isLoading) return <p>Carregando metas...</p>;
  if (error) return <p>Erro ao carregar metas.</p>;

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Metas</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {goals.map(goal => (
          <Card key={goal.id}>
            <h2 className="font-semibold">{goal.title}</h2>
            <p className="text-sm text-gray-500">Prazo: {format(new Date(goal.targetDate), 'dd/MM/yyyy')}</p>
            <p>Progresso: {goal.progress}%</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Goals;