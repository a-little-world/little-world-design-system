import { InputHeight, InputWidth } from './TextInput';

export interface TimePickerBaseProps {
  cannotError?: boolean;
  defaultValue?: string;
  disabled?: boolean;
  error?: string;
  height?: InputHeight;
  inModal?: boolean;
  labelTooltip?: string;
  minuteStep?: 1 | 5 | 10 | 15 | 30;
  onChange?: (time: string | undefined) => void;
  placeholder?: string;
  required?: boolean;
  use12Hour?: boolean;
  value?: string;
  width?: InputWidth;
}
