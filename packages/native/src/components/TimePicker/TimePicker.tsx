import React from 'react';
import { StyleProp, ViewStyle, View } from 'react-native';
import Label from '../Label/Label';
import Text from '../Text/Text';

export type TimePickerProps = {
  ariaLabel?: string;
  disabled?: boolean;
  error?: string;
  format?: '12' | '24';
  id?: string;
  label?: string;
  labelTooltip?: string;
  onChange: (time: string | null) => void;
  placeholder?: string;
  required?: boolean;
  value?: string | null;
  step?: number;
  className?: string;
  style?: StyleProp<ViewStyle>;
};

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
