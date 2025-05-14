import { ReactNode } from 'react';
export declare enum LoadingSizes {
    Small = "small",
    Medium = "medium",
    Large = "large"
}
export declare const LoadingDimensions: {
    small: number;
    medium: number;
    large: number;
};
export interface LoadingBaseProps {
    align?: string;
    color?: string;
    inline?: boolean;
    size?: LoadingSizes;
    children?: ReactNode;
}
//# sourceMappingURL=Loading.d.ts.map