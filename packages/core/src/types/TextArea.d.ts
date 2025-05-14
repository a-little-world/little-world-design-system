import { ComponentPropsWithoutRef } from 'react';
export declare enum TextAreaSize {
    Xsmall = "xsmall",
    Small = "small",
    Medium = "medium",
    Large = "large"
}
export declare const TextAreaDimensions: {
    xsmall: string;
    small: string;
    medium: string;
    large: string;
};
export interface TextAreaBaseProps extends Omit<ComponentPropsWithoutRef<'textarea'>, 'onChange' | 'ref'> {
    displayCount?: boolean;
    error?: string;
    expandable?: boolean;
    id?: string;
    label?: string;
    labelTooltip?: string;
    maxLength?: number;
    onChange?: (e: any) => void;
    onSubmit?: () => boolean | Promise<boolean>;
    size?: TextAreaSize;
    value?: string;
}
//# sourceMappingURL=TextArea.d.ts.map