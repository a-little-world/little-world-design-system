import { InputHeight } from './TextInput';

export type SelectOptions = { value: string; label: string }[];

export type SelectBaseProps = {
  ariaLabel?: string;
  cannotError?: boolean;
  disabled?: boolean;
  error?: string;
  height?: InputHeight;
  id?: string;
  label?: string;
  labelTooltip?: string;
  lockedValue?: string;
  maxWidth?: string | number;
  onValueChange: (value: string) => void;
  options: SelectOptions;
  placeholder: string;
  required?: boolean;
  value?: string;
};
