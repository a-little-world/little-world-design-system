import React from 'react';
import { StyleProp, ViewStyle, View } from 'react-native';
import Label from '../Label/Label';
import Text from '../Text/Text';

export interface DatePickerProps {
  error?: string;
  label?: string;
  placeholder?: string;
  value?: Date | null;
  style?: StyleProp<ViewStyle>;
}

const DatePicker: React.FC<DatePickerProps> = ({
  label,
  placeholder,
  value,
  error,
  style,
}: DatePickerProps) => {
  return (
    <View style={style}>
      {Boolean(label) && <Label bold>{label}</Label>}
      <View
        style={{
          padding: 12,
          borderRadius: 4,
          borderWidth: 1,
          borderColor: '#ccc',
        }}
      >
        <Text>
          {value ? value.toLocaleDateString() : placeholder || 'Select date'}
        </Text>
      </View>
      {Boolean(error) && <Text>{error}</Text>}
    </View>
  );
};

export default DatePicker;
