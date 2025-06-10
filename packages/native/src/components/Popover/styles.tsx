// import {
//   slideDownAndFade,
//   slideLeftAndFade,
//   slideRightAndFade,
//   slideUpAndFade,
// } from "../../utils/animations";
import { PopoverSizes } from "@a-little-world/little-world-design-system-core";
import { StyleSheet } from "react-native";
import { DefaultTheme } from "styled-components/native";

//   &[data-state="delayed-open"][data-side="top"] {
//     animation-name: ${slideDownAndFade};
//   }
//   &[data-state="delayed-open"][data-side="right"] {
//     animation-name: ${slideLeftAndFade};
//   }
//   &[data-state="delayed-open"][data-side="bottom"] {
//     animation-name: ${slideUpAndFade};
//   }
//   &[data-state="delayed-open"][data-side="left"] {
//     animation-name: ${slideRightAndFade};
//   }
// `;

export const getPopoverContentStyles = ({
  theme,
  width,
  extraPaddingTop,
  asToolTip,
}: {
  theme: DefaultTheme;
  width?: number;
  extraPaddingTop?: boolean;
  asToolTip?: boolean;
}) =>
  StyleSheet.create({
    content: {
      display: "flex",
      flexDirection: "column",
      position: "absolute",
      zIndex: 9999,
      borderRadius: theme.radius.xxxsmall,
      padding: theme.spacing.small,
      width: width || undefined,
      maxWidth: PopoverSizes.Large,
      shadowColor: "rgba(20, 25, 30, 0.35)", // iOS
      shadowOffset: { width: 0, height: 10 },
      shadowOpacity: 0.35,
      shadowRadius: 20,
      elevation: 6, // android
      backgroundColor: asToolTip
        ? theme.color.surface.bold
        : theme.color.surface.primary,
      paddingRight: asToolTip ? theme.spacing.medium : theme.spacing.small,
      ...(extraPaddingTop && {
        paddingTop: theme.spacing.medium,
      }),
    },
  });

export const getPopoverCloseStyles = ({
  theme,
  asToolTip,
}: {
  theme: DefaultTheme;
  asToolTip?: boolean;
}) =>
  StyleSheet.create({
    close: {
      position: "absolute" as const,
      top: theme.spacing.xsmall,
      right: theme.spacing.xsmall,
      width: 12,
      height: 12,
      color: asToolTip ? theme.color.text.reversed : theme.color.text.primary,
    },
  });

export const getPopoverArrowStyles = ({
  theme,
  asToolTip,
}: {
  theme: DefaultTheme;
  asToolTip?: boolean;
}) => ({
  arrow: {
    backgroundColor: asToolTip
      ? theme.color.surface.bold
      : theme.color.surface.primary,
  },
});

// export const StyledPopoverContent = styled(PopoverContent)<{
//   $asToolTip?: boolean;
//   $extraPaddingTop: boolean;
//   $width: PopoverSizes;
// }>`
//   ${POPOVER_CONTENT_CSS}

//   display: flex;
//   flex-direction: column;
//   z-index: 1000;

//   ${({ $width }) =>
//     $width &&
//     `
//       width: ${$width};
//     `}

//   ${({ $extraPaddingTop, theme }) =>
//     $extraPaddingTop &&
//     `
//     padding-top: ${theme.spacing.medium};
//   `}

//   ${({ $asToolTip, theme }) => css`
//     background-color: ${$asToolTip
//       ? theme.color.surface.bold
//       : theme.color.surface.primary};
//     color: ${$asToolTip ? theme.color.text.reversed : theme.color.text.primary};
//     padding-right: ${$asToolTip
//       ? theme.spacing.medium
//       : theme.spacing.small};
//   `}

//   &[data-state='open'][data-side='top'] {
//     animation-name: ${slideDownAndFade};
//   }
//   &[data-state="open"][data-side="right"] {
//     animation-name: ${slideLeftAndFade};
//   }
//   &[data-state="open"][data-side="bottom"] {
//     animation-name: ${slideUpAndFade};
//   }
//   &[data-state="open"][data-side="left"] {
//     animation-name: ${slideRightAndFade};
//   }
// `;

// export const StyledPopoverClose = styled(PopoverClose)<{
//   $asToolTip?: boolean;
// }>`
//   position: absolute;
//   top: ${({ theme }) => theme.spacing.xsmall};
//   right: ${({ theme }) => theme.spacing.xsmall};
//   width: 12px !important;
//   height: 12px !important;
//   color: ${({ $asToolTip, theme }) =>
//     $asToolTip ? theme.color.text.reversed : theme.color.text.primary};
// `;

// export const StyledPopoverArrow = styled(PopoverArrow)<{
//   $asToolTip?: boolean;
// }>`
//   fill: ${({ $asToolTip, theme }) =>
//     $asToolTip ? theme.color.surface.bold : theme.color.surface.primary};
// `;
