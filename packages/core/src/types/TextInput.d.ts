export declare enum InputWidth {
    Small = 136,
    Medium = 240,
    Large = 480
}
export declare enum InputHeight {
    Small = "small",
    Medium = "medium",
    Large = "large"
}
export interface TextInputBaseProps {
    error?: string;
    height?: InputHeight;
    inline?: boolean;
    label: string;
    labelTooltip?: string;
    onSubmit?: () => boolean;
    width?: InputWidth;
}
//# sourceMappingURL=TextInput.d.ts.map