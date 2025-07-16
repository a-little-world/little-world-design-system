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
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { PortalHost } from "@rn-primitives/portal";
import { ButtonAppearance, TextTypes } from "@a-little-world/little-world-design-system-core";
import { useTheme } from "styled-components/native";
import TestPage from "./TestPage";

const Stack = createNativeStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
  },
});

const textParser = {
  bold: "<bold>This will be bold</bold> Hallo",
  highlight: "<highlight>This will be orange</highlight>sdfa",
  link: `<a {"href": "https://little-world.com/", "target":"_blank"}>Link</a>`,
  linkAsButton: `<a {"to": "TestPage", "target":"_blank", "buttonAppearance": "primary"}>Button</a>`,
  button: "<button>Test Button</button>"
}

function AppContent({ navigation }: { navigation: any }) {
  const theme = useTheme();
  return (
    <SafeAreaView style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Text >{"<highlight>Passwort zurücksetzen</highlight> <bold>passwort zurücksetzen</bold>"}</Text>
      <Button onPress={() => console.log("presssing!!")}>
        Basic button
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
            Open Popover
          </Button>
        }
      >
        <Text>This is tooltip text with tooltip styling</Text>
      </Popover>

      <View>
        <Text>{textParser.bold}</Text>
        <Text>{textParser.highlight}</Text>
        <Text>{textParser.link}</Text>
        <Text>{textParser.linkAsButton}</Text>
        <Text>{textParser.button}</Text>
      </View>

      <Button
        appearance={ButtonAppearance.Primary}
        onPress={() => navigation.navigate("TestPage")}
      >
        Go to Test Page
      </Button>
    </SafeAreaView>
  );
}

function MainScreen({ navigation }: { navigation: any }) {
  return <AppContent navigation={navigation} />;
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
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Main"
              component={MainScreen}
              options={{ title: "Main App" }}
            />
            <Stack.Screen
              name="TestPage"
              component={TestPage}
              options={{ title: "Test Page" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
        <PortalHost />
      </CustomThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
