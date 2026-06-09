import { ReactNode } from 'react';

export interface ModalBaseProps {
  isOpen: boolean;
  onClose: () => void;
  title?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
  size?: 'small' | 'medium' | 'large';
  closeButton?: boolean;
  backdrop?: boolean;
  onBackdropClick?: () => void;
  className?: string;
}
