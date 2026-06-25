import { SelectBaseProps } from './Select';

export enum MultiSelectVariants {
  /** Radix select field (default). */
  Select = 'select',
  /** Searchable combobox field. */
  Combobox = 'combobox',
}

export type MultiSelectFieldProps = Omit<
  SelectBaseProps,
  'onValueChange' | 'error' | 'ariaLabel'
> & {
  ariaLabel: string;
  dataField: string;
  values: string[];
  errors: string[];
};

type MultiSelectBaseProps = {
  addMoreLabel: string;
  error?: string;
  label?: string;
  labelTooltip?: string;
  inModal?: boolean;
  locked?: boolean;
  defaultSegments?: number;
  maxSegments?: number;
  onValueChange: (value: Record<string, string>[]) => void;
  restrictions?: Record<string, string[]>;
  /** Underlying select field per row. Defaults to {@link MultiSelectVariants.Select}. */
  variant?: MultiSelectVariants;
};

export type MultiSelectProps = MultiSelectBaseProps & {
  firstSelect: MultiSelectFieldProps;
  secondSelect: MultiSelectFieldProps;
};
