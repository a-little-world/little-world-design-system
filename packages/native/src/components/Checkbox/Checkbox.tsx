import { CheckIcon } from '../Icon';
import {
  getCheckboxStyles,
  getContainerStyles,
  indicatorStyles, // StyledLabel,
} from './styles';
import * as CheckboxPrimitive from '@rn-primitives/checkbox';
import React, { useMemo } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { useTheme } from 'styled-components/native';
import Label from '../Label/Label';

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

const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  color,
  error,
  required = true, // eslint-disable-line @typescript-eslint/no-unused-vars
  inputRef,
  id,
  label,
  onCheckedChange,
  readOnly,
  style,
  ...rest
}) => {
  const theme = useTheme();
  const checkboxContainerStyle = useMemo(
    () => getContainerStyles({ theme }),
    [theme],
  );

  const checkboxstyles = useMemo(
    () =>
      getCheckboxStyles({ theme, hasError: Boolean(error), color, checked }),
    [theme, error, color, checked],
  );

  function handlePress() {
    onCheckedChange(!checked);
  }

  const [checked1, setChecked] = React.useState(false);
  return (
    <View style={checkboxContainerStyle.container}>
      {readOnly ? (
        <View style={checkboxstyles.checkbox}>
          {checked && (
            <CheckIcon
              label="check icon"
              width={10}
              height={10}
              style={indicatorStyles.indicator}
            />
          )}
        </View>
      ) : (
        <CheckboxPrimitive.Root
          id={id}
          style={checkboxstyles.checkbox}
          onPress={handlePress}
          {...rest}
          checked={checked1}
          onCheckedChange={setChecked}
        >
          <CheckboxPrimitive.Indicator>
            <CheckIcon
              label="check icon"
              width={10}
              height={10}
              style={indicatorStyles.indicator}
            />
          </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
      )}
      <Label style={checkboxstyles.text}>{label}</Label>
    </View>
  );
};

export default Checkbox;
