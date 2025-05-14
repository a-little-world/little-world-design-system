import React, { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { CustomThemeProvider, loadFonts } from "@a-little-world/little-world-design-system-native";

export const decorators = [
  (Story: React.ComponentType) => {
    const [fontsLoaded, setFontsLoaded] = useState<boolean>(false);

    useEffect(() => {
      const prepare = async (): Promise<void> => {
        try {
          await loadFonts();
          setFontsLoaded(true);
        } catch (e) {
          console.warn("Failed to load fonts in Storybook:", e);
        }
      };
      prepare();
    }, []);

    return (
      <CustomThemeProvider>
        <View style={{ flex: 1, padding: 16 }}>
          {!fontsLoaded ? <ActivityIndicator size="large" /> : <Story />}
        </View>
      </CustomThemeProvider>
    );
  },
];

export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
