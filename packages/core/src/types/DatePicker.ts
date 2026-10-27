import { InputHeight, InputWidth } from './TextInput';

export interface DatePickerBaseProps {
  cannotError?: boolean;
  defaultValue?: Date;
  disabled?: boolean;
  disabledDates?: Date[];
  error?: string;
  height?: InputHeight;
  inModal?: boolean;
  labelTooltip?: string;
  maxDate?: Date;
  minDate?: Date;
  onChange?: (date: Date | undefined) => void;
  placeholder?: string;
  required?: boolean;
  value?: Date;
  width?: InputWidth;
}
