import { InputHeight } from './TextInput';

export type SearchableSelectOptions = { value: string; label: string }[];

export type SearchableSelectBaseProps = {
  ariaLabel?: string;
  cannotError?: boolean;
  disabled?: boolean;
  error?: string;
  height?: InputHeight;
  id?: string;
  label?: string;
  labelTooltip?: string;
  maxWidth?: string | number;
  onValueChange: (value: string) => void;
  onSearch?: (searchTerm: string) => void;
  options: SearchableSelectOptions;
  placeholder: string;
  required?: boolean;
  value?: string;
  searchPlaceholder?: string;
  clearable?: boolean;
};
