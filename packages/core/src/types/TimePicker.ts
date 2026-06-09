export type TimePickerBaseProps = {
  ariaLabel?: string;
  disabled?: boolean;
  error?: string;
  format?: '12' | '24';
  id?: string;
  label?: string;
  labelTooltip?: string;
  onChange: (time: string | null) => void;
  placeholder?: string;
  required?: boolean;
  value?: string | null;
  step?: number;
  className?: string;
};
