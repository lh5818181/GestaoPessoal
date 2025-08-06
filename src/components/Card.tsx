import React, { type PropsWithChildren } from 'react';

interface CardProps { className?: string; }
const Card: React.FC<PropsWithChildren<CardProps>> = ({ children, className }) => (
  <div className={`p-4 bg-white rounded-2xl shadow-md ${className ?? ''}`}>{children}</div>
);
export default Card;