import { ReactNode } from 'react';
export declare enum ButtonVariations {
    Basic = "basic",
    Option = "option",
    Circle = "circle",
    Icon = "icon",
    Inline = "inline"
}
export declare enum ButtonAppearance {
    Primary = "primary",
    Secondary = "secondary"
}
export declare enum ButtonSizes {
    Small = "small",
    Medium = "medium",
    Large = "large",
    Stretch = "stretch"
}
export interface ButtonBaseProps {
    appearance?: ButtonAppearance;
    backgroundColor?: string;
    borderColor?: string;
    color?: string;
    children?: ReactNode;
    loading?: boolean;
    size?: ButtonSizes;
    variation?: ButtonVariations;
}
export declare const BUTTON_DIMENSIONS: {
    readonly small: {
        readonly height: 28;
        readonly minWidth: 110;
        readonly padding: {
            readonly horizontal: 12;
            readonly vertical: 8;
        };
    };
    readonly medium: {
        readonly height: 36;
        readonly minWidth: 160;
        readonly padding: {
            readonly horizontal: 16;
            readonly vertical: 12;
        };
    };
    readonly large: {
        readonly height: 44;
        readonly minWidth: 240;
        readonly padding: {
            readonly horizontal: 20;
            readonly vertical: 16;
        };
    };
    readonly stretch: {
        readonly height: 44;
        readonly minWidth: undefined;
        readonly width: "100%";
        readonly padding: {
            readonly horizontal: 20;
            readonly vertical: 16;
        };
    };
};
export declare const CIRCLE_DIMENSIONS: {
    readonly small: {
        readonly width: 28;
        readonly height: 28;
    };
    readonly medium: {
        readonly width: 36;
        readonly height: 36;
    };
    readonly large: {
        readonly width: 44;
        readonly height: 44;
    };
    readonly stretch: {
        readonly width: 44;
        readonly height: 44;
    };
};
export declare const ICON_DIMENSIONS: {
    readonly small: {
        readonly width: 16;
        readonly height: 16;
    };
    readonly medium: {
        readonly width: 24;
        readonly height: 24;
    };
    readonly large: {
        readonly width: 32;
        readonly height: 32;
    };
    readonly stretch: {
        readonly width: 32;
        readonly height: 32;
    };
};
//# sourceMappingURL=Button.d.ts.map