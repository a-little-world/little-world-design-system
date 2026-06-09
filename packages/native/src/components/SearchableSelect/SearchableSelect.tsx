import React, { useState } from 'react';
import { StyleProp, ViewStyle, View, TextInput } from 'react-native';
import Label from '../Label/Label';
import Text from '../Text/Text';

export interface SearchableSelectProps {
  error?: string;
  label?: string;
  options: Array<{ value: string; label: string }>;
  searchPlaceholder?: string;
  onSearch?: (searchTerm: string) => void;
  style?: StyleProp<ViewStyle>;
}

const SearchableSelect: React.FC<SearchableSelectProps> = ({
  label,
  options,
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
        onChangeText={text => {
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
          .filter(opt =>
            opt.label.toLowerCase().includes(searchTerm.toLowerCase()),
          )
          .map(option => (
            <Text key={option.value}>{option.label}</Text>
          ))}
      </View>
      {Boolean(error) && <Text>{error}</Text>}
    </View>
  );
};

export default SearchableSelect;
