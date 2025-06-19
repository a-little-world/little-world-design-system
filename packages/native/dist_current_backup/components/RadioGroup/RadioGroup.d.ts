import * as RadioGroupPrimitive from "@rn-primitives/radio-group";
import React from "react";
type Props = {
    error?: string;
    label?: string;
    labelTooltip?: string;
    items: Array<{
        id: string;
        label?: string;
        value: string;
    }>;
    inputRef: React.RefObject<HTMLInputElement>;
} & RadioGroupPrimitive.RootProps;
declare const RadioGroup: React.FC<Props>;
export default RadioGroup;
