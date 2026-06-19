import { InputHeight } from './TextInput';

export type SelectOptions = { value: string; label: string }[];

export type SelectBaseProps = {
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
  value?: string;
};

/**
 * @deprecated Use {@link SelectOptions} instead. Kept for backward
 * compatibility only; will be removed in a future major version.
 */
export type Options = SelectOptions;

/**
 * @deprecated Use {@link SelectBaseProps} instead. Kept for backward
 * compatibility only; will be removed in a future major version.
 */
export type DropdownBaseProps = SelectBaseProps;
