import React, { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { withBackgrounds } from "@storybook/addon-ondevice-backgrounds";
import type { Preview } from "@storybook/react-native-web-vite";
import { CustomThemeProvider } from "@a-little-world/little-world-design-system-native";
import { PortalHost } from "@rn-primitives/portal";
import { loadFonts } from "../utils/loadFonts";

const preview: Preview = {
  decorators: [
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
          <PortalHost />
        </CustomThemeProvider>
      );
    },
    withBackgrounds,
  ],

  parameters: {
    backgrounds: {
      default: "plain",
      values: [
        { name: "plain", value: "white" },
        { name: "warm", value: "hotpink" },
        { name: "cool", value: "deepskyblue" },
      ],
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
