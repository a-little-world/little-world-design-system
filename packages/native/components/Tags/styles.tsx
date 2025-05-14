import { ViewStyle, DimensionValue } from 'react-native';
import { CardDimensions, CardSizes, TagAppearance, TagSizes } from '@a-little-world/little-world-design-system-core';
import { FlexAlignType, FlexStyle } from 'react-native';
import { DefaultTheme } from 'styled-components/native';

export const getTagStyles = ({
    theme,
    size,
    appearance,
    color,
}: {
    theme: DefaultTheme,
    size?: String,
    appearance?: String,
    color?: string,
}): ViewStyle => {
    const baseStyles: ViewStyle = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: theme.spacing.xxxsmall,
        backgroundColor: theme.color.surface.primary,
        borderWidth: 2,
        borderColor: color,
        borderRadius: theme.radius.large,
        minWidth: 60,
        width: 150,
        height: size === TagSizes.small ? 44 : 50,
        paddingHorizontal: theme.spacing.xsmall,
        paddingVertical: size === TagSizes.small ? theme.spacing.xsmall : theme.spacing.xxsmall
    }
    if (appearance === TagAppearance.solid)
        return ({
            ...baseStyles,
            backgroundColor: theme.color.surface.accent,

        });

    return baseStyles;
}