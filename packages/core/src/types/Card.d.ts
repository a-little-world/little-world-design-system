import { ReactNode } from 'react';
import { TextTypes } from './Text';
import { FlexAlignType, JustifyContentType } from './styles';
export declare enum CardSizes {
    Small = "small",
    Medium = "medium",
    Large = "large"
}
export declare const CardDimensions: {
    small: number;
    medium: number;
    large: number;
};
export interface CardBaseProps {
    borderColor?: string;
    children: ReactNode;
    height?: string | number;
    width?: CardSizes;
}
export interface CardHeaderProps {
    align?: FlexAlignType;
    children: ReactNode;
    textColor?: string;
    textType?: keyof typeof TextTypes;
}
export interface CardFooterProps {
    align?: JustifyContentType;
    children: ReactNode;
}
export interface CardContentProps {
    align?: FlexAlignType;
    textAlign?: string;
    gap?: string | number;
    marginBottom?: string | number;
    children: ReactNode;
}
//# sourceMappingURL=Card.d.ts.map