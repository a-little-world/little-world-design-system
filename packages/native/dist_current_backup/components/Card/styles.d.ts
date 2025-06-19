import { ViewStyle, DimensionValue } from 'react-native';
import { CardSizes } from '@a-little-world/little-world-design-system-core';
import { FlexAlignType, FlexStyle } from 'react-native';
export declare const getCardStyles: ({ borderColor, height, theme, width, }: {
    borderColor?: string | undefined;
    height?: DimensionValue | undefined;
    theme: any;
    width?: CardSizes | undefined;
}) => ViewStyle;
export declare const getCardHeaderStyles: ({ theme }: {
    theme: any;
}) => ViewStyle;
export declare const getCardContentStyles: ({ align, gap, marginBottom, theme, }: {
    align?: FlexAlignType | undefined;
    gap?: number | undefined;
    marginBottom?: number | undefined;
    theme: any;
}) => ViewStyle;
export declare const getCardFooterStyles: ({ align, theme, }: {
    align?: FlexStyle['justifyContent'];
    theme: any;
}) => ViewStyle;
