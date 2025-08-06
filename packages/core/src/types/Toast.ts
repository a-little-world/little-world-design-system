import { ReactNode } from 'react';

export interface ToastBaseProps {
  className?: string;
  icon?: ReactNode;
  headline: string;
  title?: string;
  description?: string;
  timestamp?: string;
  actionText?: string;
  actionAltText?: string;
  duration?: number;
  onClose?: () => void;
  onDismiss?: () => void;
  onClick?: () => void;
  onActionClick?: () => void;
}

export const TOAST_DEFAULT_DURATION = 3000;
