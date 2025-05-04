// import PhoneInput from 'react-phone-input-2';
import { StyleSheet, View, TextInput as RNTextInput } from 'react-native';
import { InputHeight, InputWidth } from '@a-little-world/little-world-design-system-core';
import { useTheme } from 'styled-components/native';

import Button from '../Button/Button';
import { INPUT_ERROR_CSS } from '../InputError/InputError';

export const createStyles = (theme: any) => StyleSheet.create({
  inputWrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: InputWidth.Large,
  },
  inputContainer: {
    position: 'relative',
    width: '100%',
  },
  input: {
    width: '100%',
    borderWidth: 2,
    borderColor: theme.color.border.subtle,
    borderRadius: 6,
    padding: theme.spacing.xxsmall,
    marginBottom: theme.spacing.xxxxsmall,
    fontSize: 16, // 1rem equivalent
    lineHeight: 20, // 1.25 equivalent
  },
  inputSmall: {
    padding: 5,
  },
  inputError: {
    borderColor: theme.color.border.error,
  },
  showPasswordToggle: {
    position: 'absolute',
    right: theme.spacing.xxsmall,
    top: theme.spacing.xxsmall,
  },
});

export const InputWrapper = ({ children, width = InputWidth.Large, style }: { children: React.ReactNode; width?: InputWidth; style?: any }) => {
  const theme = useTheme();
  const styles = createStyles(theme);
  return (
    <View style={[styles.inputWrapper, { maxWidth: width }, style]}>
      {children}
    </View>
  );
};

export const InputContainer = ({ children, style }: { children: React.ReactNode; style?: any }) => {
  const theme = useTheme();
  const styles = createStyles(theme);
  return (
    <View style={[styles.inputContainer, style]}>
      {children}
    </View>
  );
};

export const Input = ({ hasError, height, style, ...props }: { hasError?: boolean; height?: InputHeight; style?: any } & React.ComponentProps<typeof RNTextInput>) => {
  const theme = useTheme();
  const styles = createStyles(theme);
  return (
    <RNTextInput
      style={[
        styles.input,
        height === InputHeight.Small && styles.inputSmall,
        hasError && styles.inputError,
        style,
      ]}
      {...props}
    />
  );
};

// export const TelephoneInput = styled(PhoneInput)<{
//   $hasError: boolean;
//   $height?: string;
// }>`
//   > input.form-control {
//     ${INPUT_CSS}
//     padding-left: 52px;

//     ${({ $hasError }) => $hasError && INPUT_ERROR_CSS}
//   }

//   .flag-dropdown {
//     overflow: hidden;
//     border: 2px solid
//       ${({ theme, $hasError }) =>
//         $hasError ? theme.color.border.error : theme.color.border.subtle};
//   }

//   .flag-dropdown.open {
//     overflow: visible;
//   }

//   .flag-dropdown,
//   .flag-dropdown.open {
//     background: none;
//     border-radius: 6px 0 0 6px;
//   }

//   .react-tel-input .flag-dropdown.open .selected-flag {
//     background: none;
//   }

//   .react-tel-input .selected-flag {
//     padding: 0 0 0 14px;
//     scale: 1.3;
//     width: 51px;
//     transition: background ease 0.2s;

//     > .flag {
//       margin-top: -6px;
//     }
//   }

//   .react-tel-input .selected-flag:focus {
//     background: none;
//   }

//   .flag-dropdown .selected-flag:hover {
//     background: ${({ theme }) => theme.color.border.subtle};
//   }

//   .react-tel-input .flag-dropdown.open .selected-flag {
//     &:hover {
//       background: none;
//       filter: brightness(0.8);
//     }
//   }

//   .react-tel-input .selected-flag,
//   .react-tel-input .flag-dropdown.open .selected-flag {
//     border-radius: 8px 0 0 8px;
//   }
// `;

export const ShowPasswordToggle = ({ children, style, ...props }: { children: React.ReactNode; style?: any } & React.ComponentProps<typeof View>) => {
  const theme = useTheme();
  const styles = createStyles(theme);
  return (
    <View style={[styles.showPasswordToggle, style]} {...props}>
      {children}
    </View>
  );
};
