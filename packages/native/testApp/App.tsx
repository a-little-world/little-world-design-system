import React from 'react';
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { CustomThemeProvider, Text } from "@a-little-world/little-world-design-system-native";

function AppContent() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  );
}

function App() {
  const isStorybookEnabled = process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === "true";

  // If Storybook is enabled, let the Storybook preview handle the providers
  if (isStorybookEnabled) {
    const StorybookUIRoot = require("./.rnstorybook").default;
    return <StorybookUIRoot />;
  }

  // Otherwise, wrap with our app providers
  return (
    <CustomThemeProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <SafeAreaProvider>
          <NavigationContainer>
            <AppContent />
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
