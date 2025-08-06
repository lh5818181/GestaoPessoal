import React, { type InputHTMLAttributes } from 'react';

const Input: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({ className, ...props }) => (
  <input className={`border rounded p-2 focus:outline-none focus:ring ${className ?? ''}`} {...props} />
);
export default Input;