import React from 'react';
import { StyleProp, ViewStyle, View, Pressable } from 'react-native';
import Label from '../Label/Label';
import Text from '../Text/Text';

export interface FileUploaderProps {
  label?: string;
  error?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const FileUploader: React.FC<FileUploaderProps> = ({
  label,
  icon,
  error,
  disabled,
  style,
}) => {
  return (
    <View style={style}>
      {Boolean(label) && <Label bold>{label}</Label>}
      <Pressable
        disabled={disabled}
        style={{
          padding: 24,
          borderRadius: 8,
          borderWidth: 2,
          borderColor: '#ddd',
          borderStyle: 'dashed',
          justifyContent: 'center',
          alignItems: 'center',
          opacity: disabled ? 0.5 : 1,
        }}
      >
        {icon}
        <Text>Upload files</Text>
      </Pressable>
      {Boolean(error) && <Text>{error}</Text>}
    </View>
  );
};

export default FileUploader;
