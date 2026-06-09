export interface CheckboxGroupItem {
  id: string;
  label?: string;
  value: string;
  disabled?: boolean;
}

export interface CheckboxGroupBaseProps {
  items: CheckboxGroupItem[];
  values?: string[];
  onValuesChange?: (values: string[]) => void;
  error?: string;
  label?: string;
  labelTooltip?: string;
  disabled?: boolean;
  required?: boolean;
  orientation?: 'vertical' | 'horizontal';
}

// Keep MultiCheckbox as an alias for backward compatibility
export type MultiCheckboxBaseProps = CheckboxGroupBaseProps;
