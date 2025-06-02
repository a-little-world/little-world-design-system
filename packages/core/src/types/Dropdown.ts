import { InputHeight } from "./TextInput";

export type Options = { value: string; label: string }[];

export type DropdownBaseProps = {
    ariaLabel?: string;
    cannotError?: boolean;
    error?: string;
    height?: InputHeight;
    label?: string;
    labelTooltip?: string;
    lockedValue?: string;
    maxWidth?: string | number;
    options: Options;
    onValueChange: (value: string) => void;
    placeholder: string;
    value?: string;
    disabled?: boolean;
    required?: boolean;
    // inputRef?: React.RefObject<HTMLButtonElement>;
  }