import React from 'react';
import { useTasks } from '../../features/tasks/useTasks';
import Card from '../../components/Card';

const Tasks: React.FC = () => {
  const { data: tasks = [], isLoading, error } = useTasks();

  if (isLoading) return <p>Carregando tarefas...</p>;
  if (error) return <p>Erro ao carregar tarefas.</p>;

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Tarefas</h1>
      <div className="space-y-2">
        {tasks.map(task => (
          <Card key={task.id} className="flex justify-between items-center">
            <span>{task.description}</span>
            <input type="checkbox" checked={task.completed} readOnly />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Tasks;