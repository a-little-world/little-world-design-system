import { StyleSheet } from 'react-native';
import Label from '../Label/Label';
import { DefaultTheme } from 'styled-components/native';

const ITEM_WIDTH = 16;

// export const CheckboxButtonContainer = styled(Checkbox.Root)<{
//   $hasError?: boolean;
// }>`
//   cursor: pointer;
//   padding: ${({ theme }) => theme.spacing.xxsmall};
//   display: flex;
//   align-items: center;
//   border: 1px solid
//     ${({ theme, checked, $hasError }) =>
//       checked
//         ? $hasError
//           ? theme.color.border.error
//           : theme.color.border.selected
//         : theme.color.border.subtle};
//   border-radius: ${({ theme }) => theme.radius.xxsmall};
//   background: ${({ checked, $hasError, theme }) =>
//     checked
//       ? $hasError
//         ? theme.color.surface.error
//         : theme.color.surface.accent
//       : theme.color.surface.secondary};

//   label {
//     cursor: pointer;
//   }
// `;

export const getContainerStyles = ({ theme }: { theme: DefaultTheme }) => StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    marginVertical: theme.spacing.xxxxsmall,
  }
})

export const getCheckboxStyles = ({ theme, hasError, color, checked }: { theme: DefaultTheme, hasError: boolean, color: string, checked: boolean }) => StyleSheet.create({
  checkbox: {
    color: theme.color.text.primary,
    width: ITEM_WIDTH,
    height: ITEM_WIDTH,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: theme.radius.xxsmall,
    borderWidth: 1,
    borderColor: hasError ? theme.color.border.error : theme.color.border.contrast,
    backgroundColor: checked ? color : theme.color.surface.primary,
    ...(checked && color && {
      backgroundColor: color,
      borderColor: color,
      color: theme.color.text.reversed,
    }),
  }
})

export const indicatorStyles = StyleSheet.create({
  indicator: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

// export const StyledLabel = styled(Label)`
//   margin-left: ${({ theme }) => theme.spacing.xxsmall};
// `;
