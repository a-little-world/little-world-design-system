import { ReactNode } from 'react';
export declare enum WidgetSizes {
    Small = "small",
    Medium = "medium",
    Large = "large"
}
export declare const WidgetDimensions: {
    small: string;
    medium: string;
    large: string;
};
export interface WidgetBaseProps {
    borderColor?: string;
    children: ReactNode;
    height?: string;
    width?: WidgetSizes;
    header?: string | ReactNode;
    footer?: string | ReactNode;
    padding?: string;
}
export interface WidgetHeaderProps {
    align?: string;
    children: ReactNode;
    textColor?: string;
}
export interface WidgetFooterProps {
    align?: string;
    children: ReactNode;
}
//# sourceMappingURL=Widget.d.ts.map