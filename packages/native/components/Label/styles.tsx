import { ViewStyle, DimensionValue, TextStyle } from 'react-native';
import { CardDimensions, CardSizes, TagAppearance, TagSizes } from '@a-little-world/little-world-design-system-core';
import { FlexAlignType, FlexStyle } from 'react-native';
import { DefaultTheme } from 'styled-components/native';

export const getLabelStyles = ({
    theme,
    bold,
    inline,
    marginBottom,
}: {
    theme: DefaultTheme,
    bold?: boolean,
    children?: any,
    inline?: boolean,
    marginBottom?: number,
}): TextStyle => {
    const baseStyles: TextStyle = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: theme.spacing.xxxsmall,
        fontWeight: bold ? 'bold' : 'normal',
        flexShrink: inline ? 1 : 0,
        marginBottom: marginBottom ? marginBottom : 0,
    }

    return baseStyles;
}