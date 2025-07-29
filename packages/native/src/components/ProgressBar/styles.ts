import { StyleSheet } from "react-native";
import { DefaultTheme } from "styled-components/native";

export const getProgressBarStyles = ({ theme }: { theme: DefaultTheme }) => StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%',
        display: 'flex'
    },
    root: {
        flex: 1,
        position: 'relative',
        overflow: 'hidden',
        borderRadius: theme.radius.xsmall,
        backgroundColor: theme.color.surface.tertiary,
        height: 8,
    },
    indicator: {
        backgroundColor: theme.color.surface.indicator,
        height: '100%',
    }
})