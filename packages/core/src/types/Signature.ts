import { ReactNode } from 'react';

export interface SignatureBaseProps {
  onSignatureSave: (signatureDataUrl: string) => void;
  onCancel?: () => void;
  width?: string | number;
  height?: string | number;
  penColor?: string;
  penSize?: number;
  backgroundColor?: string;
  label?: string;
  clearButtonLabel?: string;
  saveButtonLabel?: string;
  cancelButtonLabel?: string;
  className?: string;
  disabled?: boolean;
}
