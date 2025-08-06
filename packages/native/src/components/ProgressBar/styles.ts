import { StyleSheet } from "react-native";
import { DefaultTheme } from "styled-components/native";

export const getProgressBarStyles = ({ theme }: { theme: DefaultTheme }) => StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        gap: theme.spacing.xxxsmall,
        display: 'flex'
    },
    root: {
        flex: 1,
        position: 'relative',
        overflow: 'hidden',
        borderRadius: theme.radius.xsmall,
        backgroundColor: theme.color.surface.secondary,
        height: 8,
    },
    indicator: {
        backgroundColor: theme.color.surface.indicator,
        height: '100%',
    }
})