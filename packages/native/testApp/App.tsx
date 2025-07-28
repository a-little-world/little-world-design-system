import React, { useEffect, useState } from "react";
import {
  Button,
  CustomThemeProvider,
  EyeOpenIcon,
  Logo,
  Popover,
  Text,
  Checkbox
} from "@a-little-world/little-world-design-system-native";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { PortalHost } from "@rn-primitives/portal";
import { ButtonAppearance, TextTypes } from "@a-little-world/little-world-design-system-core";
import { useTheme } from "styled-components/native";
import TestPage from "./TestPage";

import { loadFonts } from "./utils/loadFonts";
import { getAppStyles } from "./App.styles";

const Stack = createNativeStackNavigator();

const textParser = {
  bold: "<bold>This will be bold</bold> Hallo",
  highlight: "<highlight>This will be orange</highlight>sdfa",
  link: `Text davor <a {"href": "https://little-world.com/", "target":"_blank"}>Link</a> und text danach`,
  linkAsButton: `<a {"to": "TestPage", "target":"_blank", "buttonAppearance": "primary"}>Link as Button</a>`,
  button: "<button>Test Button</button>"
}

function AppContent({ navigation }: { navigation: any }) {
  const theme = useTheme();
  const styles = getAppStyles(theme);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const prepare = async (): Promise<void> => {
      try {
        await loadFonts();
        setFontsLoaded(true);
      } catch (e) {
        console.warn("Failed to load fonts:", e);
      }
    };
    prepare();
  }, []);

  useEffect(() => {
    if (fontsLoaded) {
      // SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text type={TextTypes.Heading2}>Home Page</Text>
      <Text >{"<highlight>Passwort zurücksetzen</highlight> <bold>passwort zurücksetzen</bold>"}</Text>
      <Button onPress={() => console.log("presssing!!")}>
        Basic button test
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

      <View style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <Text>{textParser.bold}</Text>
        <Text>{textParser.highlight}</Text>
        <Text>{textParser.link}</Text>
        <Text>{textParser.linkAsButton}</Text>
        <Text>{textParser.button}</Text>
        <Checkbox onCheckedChange={(value) => console.log({ checked: value })} label='Hallo ein <bold>guten</bold> Tag' checked={false}></Checkbox>
        <Checkbox onCheckedChange={(value) => console.log({ checked: value })} label='Read only' readOnly checked />
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
          <Stack.Navigator id={undefined}>
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
