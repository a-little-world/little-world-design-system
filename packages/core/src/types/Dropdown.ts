import { InputHeight } from './TextInput';

export type Options = { value: string; label: string }[];

export type DropdownBaseProps = {
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
  options: Options;
  placeholder: string;
  required?: boolean;
  value?: string;
};
