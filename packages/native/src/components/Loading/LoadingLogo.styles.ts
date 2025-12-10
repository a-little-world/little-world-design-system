import { StyleSheet, ViewStyle } from 'react-native';

export const getLoadingLogoStyles = (dimension: number) => {
  return StyleSheet.create({
    container: {
      width: dimension,
      height: dimension,
    } as ViewStyle,
  });
};
