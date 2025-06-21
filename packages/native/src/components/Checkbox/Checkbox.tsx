// import { CheckboxProps as RadixCheckboxProps } from '@radix-ui/react-checkbox';
import { CheckIcon } from "../Icon";
// import InputError from '../InputError/InputError';
import {
  getCheckboxStyles,
  getContainerStyles,
  indicatorStyles, // StyledLabel,
} from "./styles";
import * as CheckboxPrimitive from "@rn-primitives/checkbox";
import React, { useMemo } from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import { useTheme } from "styled-components/native";

type CheckboxProps = {
  style?: StyleProp<ViewStyle>;
  color?: string;
  error?: string;
  id?: string;
  inputRef?: React.RefObject<HTMLButtonElement>;
  label?: string;
  readOnly?: boolean;
  required?: boolean;
} & CheckboxPrimitive.RootProps;

// export const CheckboxButton: React.FC<CheckboxProps> = ({
//   checked,
//   color,
//   error,
//   required = true,
//   id,
//   inputRef,
//   label,
//   onCheckedChange,
//   readOnly,
//   style,
//   value,
//   ...rest
// }) => (
//   <CheckboxButtonContainer
//     ref={inputRef}
//     id={id}
//     checked={checked}
//     onCheckedChange={onCheckedChange}
//     value={value}
//     $hasError={Boolean(error)}
//     {...rest}
//   >
//     <NonInteractiveCheckbox $color={color} checked={checked}>
//       {checked && (
//         <CheckIcon label="check icon" width={10} />
//       )}
//     </NonInteractiveCheckbox>
//     {label && (
//       <StyledLabel htmlFor={id} inline>
//         {label}
//       </StyledLabel>
//     )}
//   </CheckboxButtonContainer>
// );

const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  color,
  error,
  required = true,
  id,
  // inputRef,
  label,
  onCheckedChange,
  readOnly,
  style,
  // value,
  ...rest
}) => {
  const theme = useTheme();
  const checkboxContainerStyle = useMemo(
    () => getContainerStyles({ theme }),
    [theme]
  );
  const checkboxstyles = useMemo(
    () =>
      getCheckboxStyles({ theme, hasError: Boolean(error), color, checked }),
    [theme, error, color, checked]
  );

  return (
    <View style={style}>
      <View style={checkboxContainerStyle.container}>
        {readOnly ? (
          <View style={checkboxstyles.checkbox}>
            {checked && <CheckIcon label="check icon" width={10} />}
          </View>
        ) : (
          <CheckboxPrimitive.Root
            id={id}
            checked={checked}
            onCheckedChange={onCheckedChange}
            style={checkboxstyles.checkbox}
            // ref={inputRef}
            // value={value}
            {...rest}
          >
            <CheckboxPrimitive.Indicator style={indicatorStyles.indicator}>
              <CheckIcon label="check icon" width={10} />
            </CheckboxPrimitive.Indicator>
          </CheckboxPrimitive.Root>
        )}
        {/* {label && (
          <StyledLabel htmlFor={id} inline>
            {label}
          </StyledLabel>
        )} */}
      </View>
      {/* {required && (
        <InputError visible={Boolean(error)} textAlign="left">
          {error}
        </InputError>
      )} */}
    </View>
  );
};

export default Checkbox;
