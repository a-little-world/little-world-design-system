import InputError from '../InputError/InputError';
import Label from '../Label/Label';
import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import Checkbox from '../Checkbox/Checkbox';

export interface CheckboxGroupItem {
  id: string;
  label?: string;
  value: string;
  disabled?: boolean;
}

export type CheckboxGroupProps = {
  items: CheckboxGroupItem[];
  values?: string[];
  onValuesChange?: (values: string[]) => void;
  error?: string;
  label?: string;
  disabled?: boolean;
  orientation?: 'vertical' | 'horizontal';
  style?: StyleProp<ViewStyle>;
};

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  items,
  values = [],
  onValuesChange,
  error,
  label,
  disabled,
  orientation = 'vertical',
  style,
}) => {
  const handleCheckboxChange = (value: string, checked: boolean) => {
    const newValues = checked
      ? [...values, value]
      : values.filter((v: string) => v !== value);
    onValuesChange?.(newValues);
  };

  return (
    <View style={style}>
      {Boolean(label) && <Label bold>{label}</Label>}
      <View
        style={{
          flexDirection: orientation === 'horizontal' ? 'row' : 'column',
          gap: 12,
        }}
      >
        {items.map((item: CheckboxGroupItem) => (
          <Checkbox
            key={item.id}
            checked={values.includes(item.value)}
            onCheckedChange={(checked: boolean) =>
              handleCheckboxChange(item.value, checked)
            }
            disabled={disabled || item.disabled}
            label={item.label}
          />
        ))}
      </View>
      {Boolean(error) && (
        <InputError visible={Boolean(error)}>{error}</InputError>
      )}
    </View>
  );
};

export default CheckboxGroup;


