import React from 'react';
import { StyleProp, ViewStyle, View } from 'react-native';
import Text from '../Text/Text';

export type PDFViewerProps = {
  src: string | ArrayBuffer;
  width?: string | number;
  height?: string | number;
  className?: string;
  loading?: React.ReactNode;
  error?: React.ReactNode;
  controls?: boolean;
  zoom?: boolean;
  download?: boolean;
  print?: boolean;
  scale?: number;
  style?: StyleProp<ViewStyle>;
};

const PDFViewer: React.FC<PDFViewerProps> = ({ loading, error, style }) => {
  return (
    <View style={[{ flex: 1 }, style]}>
      {loading || <Text>Loading PDF...</Text>}
      {error || <Text>Error loading PDF</Text>}
      <Text>PDF Viewer - Native placeholder</Text>
    </View>
  );
};

export default PDFViewer;
