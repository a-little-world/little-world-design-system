import { InputHeight } from './TextInput';

import { SelectOptions } from './Select';

export type SearchableSelectBaseProps = {
  ariaLabel?: string;
  cannotError?: boolean;
  disabled?: boolean;
  error?: string;
  height?: InputHeight;
  id?: string;
  inModal?: boolean;
  label?: string;
  labelTooltip?: string;
  lockedValue?: string;
  maxWidth?: string | number;
  onValueChange: (value: string) => void;
  options: SelectOptions;
  placeholder: string;
  required?: boolean;
  searchPlaceholder?: string;
  value?: string;
};
