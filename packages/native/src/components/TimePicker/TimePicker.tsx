import React from 'react';
import { StyleProp, ViewStyle, View } from 'react-native';
import Label from '../Label/Label';
import Text from '../Text/Text';

export interface TimePickerProps {
  error?: string;
  label?: string;
  placeholder?: string;
  value?: string | null;
  style?: StyleProp<ViewStyle>;
}

const TimePicker: React.FC<TimePickerProps> = ({
  label,
  placeholder,
  value,
  error,
  style,
}) => {
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
        <Text>{value || placeholder || 'Select time'}</Text>
      </View>
      {Boolean(error) && <Text>{error}</Text>}
    </View>
  );
};

export default TimePicker;
