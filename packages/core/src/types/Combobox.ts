import { InputHeight } from './TextInput';
import { Options } from './Dropdown';

type ComboboxSharedProps = {
  ariaLabel?: string;
  cannotError?: boolean;
  chipLimit?: number;
  disabled?: boolean;
  error?: string;
  height?: InputHeight;
  id?: string;
  label?: string;
  labelTooltip?: string;
  maxWidth?: string | number;
  options: Options;
  placeholder: string;
  required?: boolean;
};

export type ComboboxSingleBaseProps = ComboboxSharedProps & {
  multiple?: false;
  lockedValue?: string;
  onValueChange: (value: string) => void;
  value?: string;
};

export type ComboboxMultipleBaseProps = ComboboxSharedProps & {
  multiple: true;
  lockedValue?: string[];
  onValueChange: (value: string[]) => void;
  value?: string[];
};

export type ComboboxBaseProps =
  | ComboboxSingleBaseProps
  | ComboboxMultipleBaseProps;
