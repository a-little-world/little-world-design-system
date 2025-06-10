import React from "react";
import {
  Button,
  CustomThemeProvider,
  Popover,
  Text,
} from "@a-little-world/little-world-design-system-native";
import { StyleSheet, View } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { PortalHost } from "@rn-primitives/portal";
import { ButtonAppearance } from "@a-little-world/little-world-design-system-core";

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
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Button onPress={() => console.log("presssing!!")}>
        <Text>Basic button</Text>
      </Button>
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
    </View>
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
