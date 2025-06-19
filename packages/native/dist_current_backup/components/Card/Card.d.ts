import React from "react";
import { CardBaseProps, CardContentProps, CardFooterProps, CardHeaderProps } from "@a-little-world/little-world-design-system-core";
type CardProps = CardBaseProps & {
    style?: any;
};
export declare const CardHeader: React.FC<CardHeaderProps>;
export declare const CardContent: React.FC<CardContentProps>;
export declare const CardFooter: React.FC<CardFooterProps>;
declare const Card: React.FC<CardProps>;
export default Card;
