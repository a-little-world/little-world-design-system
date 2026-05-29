import { DropdownBaseProps } from './Dropdown';

export enum MultiDropdownVariants {
  /** Radix select field (default). */
  Dropdown = 'dropdown',
  /** Searchable combobox field. */
  Combobox = 'combobox',
}

export type MultiDropdownFieldProps = Omit<
  DropdownBaseProps,
  'onValueChange' | 'error' | 'ariaLabel'
> & {
  ariaLabel: string;
  dataField: string;
  values: string[];
  errors: string[];
};

export type MultiDropdownProps = {
  addMoreLabel: string;
  error?: string;
  label?: string;
  labelTooltip?: string;
  locked?: boolean;
  defaultSegments?: number;
  maxSegments?: number;
  onValueChange: (value: Record<string, string>[]) => void;
  firstDropdown: MultiDropdownFieldProps;
  secondDropdown: MultiDropdownFieldProps;
  restrictions?: Record<string, string[]>;
  /** Underlying select field per row. Defaults to {@link MultiDropdownVariants.Dropdown}. */
  variant?: MultiDropdownVariants;
};
