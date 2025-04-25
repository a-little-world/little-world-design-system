import React from 'react';
import { View } from 'react-native';
import { CustomThemeProvider } from '../src/theme';

export const decorators = [
  (Story: React.ComponentType) => (
    <CustomThemeProvider>
      <View style={{ flex: 1, padding: 16 }}>
        <Story />
      </View>
    </CustomThemeProvider>
  ),
];

export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
