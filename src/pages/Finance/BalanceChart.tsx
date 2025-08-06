import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

interface BalancePoint { date: string; balance: number; }

interface BalanceChartProps { data: BalancePoint[]; }

const BalanceChart: React.FC<BalanceChartProps> = ({ data }) => (
  <ResponsiveContainer width="100%" height={300}>
    <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="balance" stroke="#8884d8" dot={false} />
    </LineChart>
  </ResponsiveContainer>
);

export default BalanceChart;