import React, { useState } from 'react';
import { StyleProp, ViewStyle, View, TextInput } from 'react-native';
import Label from '../Label/Label';
import Text from '../Text/Text';

export type SearchableSelectProps = {
  ariaLabel?: string;
  cannotError?: boolean;
  disabled?: boolean;
  error?: string;
  id?: string;
  label?: string;
  labelTooltip?: string;
  maxWidth?: string | number;
  onValueChange: (value: string) => void;
  onSearch?: (searchTerm: string) => void;
  options: Array<{ value: string; label: string }>;
  placeholder?: string;
  required?: boolean;
  value?: string;
  searchPlaceholder?: string;
  clearable?: boolean;
  style?: StyleProp<ViewStyle>;
};

const SearchableSelect: React.FC<SearchableSelectProps> = ({
  label,
  options,
  placeholder,
  searchPlaceholder,
  error,
  style,
  onSearch,
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <View style={style}>
      {Boolean(label) && <Label bold>{label}</Label>}
      <TextInput
        placeholder={searchPlaceholder || 'Search...'}
        value={searchTerm}
        onChangeText={(text) => {
          setSearchTerm(text);
          onSearch?.(text);
        }}
        style={{
          padding: 12,
          borderRadius: 4,
          borderWidth: 1,
          borderColor: '#ccc',
        }}
      />
      <View style={{ marginTop: 8 }}>
        {options
          .filter((opt) =>
            opt.label.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((option) => (
            <Text key={option.value}>{option.label}</Text>
          ))}
      </View>
      {Boolean(error) && <Text>{error}</Text>}
    </View>
  );
};

export default SearchableSelect;
