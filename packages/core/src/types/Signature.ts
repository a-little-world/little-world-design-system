export interface SignatureProps {
  width?: number;
  height?: number;
  strokeColor?: string;
  strokeWidth?: number;
  backgroundColor?: string;
  disabled?: boolean;
  onChange?: (dataUrl: string | null) => void;
  onClear?: () => void;
  label?: string;
  clearLabel?: string;
}
