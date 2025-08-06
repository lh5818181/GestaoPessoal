import React, { type ButtonHTMLAttributes } from 'react';

const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, className, ...props }) => (
  <button
    className={`px-4 py-2 rounded-xl shadow ${className ?? 'bg-blue-600 text-white hover:bg-blue-700'}`}
    {...props}
  >{children}</button>
);
export default Button;