import React from "react";
import {
  Button,
  CustomThemeProvider,
  // Popover,
  Text,
} from "@a-little-world/little-world-design-system-native";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { PortalHost } from "@rn-primitives/portal";

function AppContent() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Button>
        <Text>Open Popover</Text>
      </Button>
      {/* <Popover
        asToolTip
        showCloseButton={false}
        trigger={
          <Button>
            <Text>Open Popover</Text>
          </Button>
        }
      >
        <Text>This is tooltip text with tooltip styling</Text>
      </Popover> */}
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
    <CustomThemeProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <SafeAreaProvider>
          <NavigationContainer>
            <AppContent />
            <PortalHost />
          </NavigationContainer>
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </CustomThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
