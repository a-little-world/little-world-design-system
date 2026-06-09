import React, { useRef } from 'react';
import { StyleProp, ViewStyle, View, Pressable } from 'react-native';
import Label from '../Label/Label';
import Text from '../Text/Text';

export type SignatureProps = {
  onSignatureSave: (signatureDataUrl: string) => void;
  onCancel?: () => void;
  width?: string | number;
  height?: string | number;
  penColor?: string;
  penSize?: number;
  backgroundColor?: string;
  label?: string;
  clearButtonLabel?: string;
  saveButtonLabel?: string;
  cancelButtonLabel?: string;
  className?: string;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
};

const Signature: React.FC<SignatureProps> = ({
  label,
  width = 300,
  height = 200,
  clearButtonLabel = 'Clear',
  saveButtonLabel = 'Save',
  cancelButtonLabel = 'Cancel',
  onSignatureSave,
  onCancel,
  style,
}) => {
  const numWidth =
    typeof width === 'string' ? Number.parseInt(width, 10) : width;
  const numHeight =
    typeof height === 'string' ? Number.parseInt(height, 10) : height;

  return (
    <View style={style}>
      {Boolean(label) && <Label bold>{label}</Label>}
      <View
        style={[
          {
            width: numWidth,
            height: numHeight,
            borderWidth: 1,
            borderColor: '#000',
            backgroundColor: '#fff',
          },
        ]}
      >
        <Text>Signature Pad - Native placeholder</Text>
      </View>
      <View style={{ flexDirection: 'row', gap: 8, marginTop: 12 }}>
        <Pressable style={{ padding: 8, backgroundColor: '#f0f0f0' }}>
          <Text>{clearButtonLabel}</Text>
        </Pressable>
        <Pressable
          onPress={() => onSignatureSave('data:image/png;base64,...')}
          style={{ padding: 8, backgroundColor: '#007AFF' }}
        >
          <Text style={{ color: 'white' }}>{saveButtonLabel}</Text>
        </Pressable>
        {onCancel && (
          <Pressable
            onPress={onCancel}
            style={{ padding: 8, backgroundColor: '#ccc' }}
          >
            <Text>{cancelButtonLabel}</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default Signature;
