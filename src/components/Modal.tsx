import React, { type PropsWithChildren } from 'react';

interface ModalProps { isOpen: boolean; onClose: () => void; }
const Modal: React.FC<PropsWithChildren<ModalProps>> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        {children}
        <button onClick={onClose} className="mt-4 text-sm text-gray-500 hover:underline">Fechar</button>
      </div>
    </div>
  );
};
export default Modal;