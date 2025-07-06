import React from "react";
import {
  Button,
  CustomThemeProvider,
  EyeOpenIcon,
  Logo,
  Popover,
  Text,
} from "@a-little-world/little-world-design-system-native";
import { SafeAreaView, StyleSheet, View } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { PortalHost } from "@rn-primitives/portal";
import { ButtonAppearance, TextTypes } from "@a-little-world/little-world-design-system-core";
import { useTheme } from "styled-components/native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
  },
});

function AppContent() {
  const theme = useTheme();
  return (
    <SafeAreaView style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Text color={theme.color.text.highlight} type={TextTypes.Heading4}>Testing the theme</Text>
      <Button onPress={() => console.log("presssing!!")}>
        <Text>Basic button</Text>
      </Button>
      <View>
        <Logo label="Logo" /> 
        <EyeOpenIcon label="EyeOpenIcon" />
      </View>
      <Popover
        asToolTip
        showCloseButton={false}
        trigger={
          <Button appearance={ButtonAppearance.Secondary}>
            <Text>Open Popover</Text>
          </Button>
        }
      >
        <Text>This is tooltip text with tooltip styling</Text>
      </Popover>
    </SafeAreaView>
  );
}

function App() {
  const isStorybookEnabled =
    process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === "true";

  if (isStorybookEnabled) {
    const StorybookUIRoot = require("./.rnstorybook").default;
    return <StorybookUIRoot />;
  }

  return (
    <SafeAreaProvider>
      <CustomThemeProvider>
        <AppContent />
        <PortalHost />
      </CustomThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
