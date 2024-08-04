import {
  Dialog,
  DialogPanel,
  Button,
  DialogTitle,
  DialogBackdrop,
} from '@headlessui/react';
import { ReactNode } from 'react';

type ModalProps = {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: JSX.Element | ReactNode;
};

export const Modal = ({ title, onClose, isOpen, children }: ModalProps) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={handleClose} className="relative z-50">
      <DialogBackdrop className="fixed inset-0 bg-black/30" />
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <DialogPanel className="max-w-lg space-y-4 text-2xl border-4 border-white bg-black text-white font-bebas p-12">
          <DialogTitle className="font-bold text-4xl">{title}</DialogTitle>
          {children}
        </DialogPanel>
      </div>
    </Dialog>
  );
};
