export type DatePickerBaseProps = {
  ariaLabel?: string;
  disabled?: boolean;
  error?: string;
  format?: string;
  id?: string;
  label?: string;
  labelTooltip?: string;
  maxDate?: Date;
  minDate?: Date;
  onChange: (date: Date | null) => void;
  placeholder?: string;
  required?: boolean;
  value?: Date | null;
  className?: string;
};
