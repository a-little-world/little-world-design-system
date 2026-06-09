import React from 'react';
import { StyleProp, ViewStyle, View } from 'react-native';
import Text from '../Text/Text';

export interface ChartLibraryProps {
  title?: string;
  style?: StyleProp<ViewStyle>;
}

const ChartLibrary: React.FC<ChartLibraryProps> = ({ title, style }) => {
  return (
    <View style={[{ flex: 1 }, style]}>
      {Boolean(title) && <Text style={{ fontWeight: 'bold' }}>{title}</Text>}
      <Text>Chart Component - Native placeholder</Text>
    </View>
  );
};

export default ChartLibrary;
