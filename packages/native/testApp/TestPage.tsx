import React from "react";
import {
  Button,
  Link,
  Text,
} from "@a-little-world/little-world-design-system-native";
import { View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ButtonAppearance, TextTypes } from "@a-little-world/little-world-design-system-core";
import { useTheme } from "styled-components/native";
import { getTestPageStyles } from "./TestPage.styles";

interface TestPageProps {
  navigation: any;
}

function TestPage({ navigation }: TestPageProps) {
  const theme = useTheme();
  const styles = getTestPageStyles(theme);

  const handleButtonPress = (buttonType: string) => {
    console.log(`${buttonType} button pressed!`);
  };

  const handleLinkPress = (linkType: string) => {
    console.log(`${linkType} link pressed!`);
  };

  const testTexts = {
    bold: "This is <bold>bold text</bold> using the text parser",
    highlight: "This is <highlight>highlighted text</highlight> using the text parser",
    mixed: "This is <bold>bold</bold> and <highlight>highlighted</highlight> text mixed together",
    link: `<a {"href": "https://example.com", "target":"_blank"}>External Link</a>`,
    button: `<button {"onPress": "test"}>Parsed Button</button>`,
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Navigation Header */}
        <View style={styles.section}>
          <Text type={TextTypes.Heading1} style={styles.sectionTitle}>
            Test Page
          </Text>
          <Button 
            appearance={ButtonAppearance.Secondary}
            onPress={() => navigation.goBack()}
          >
            ← Back to Main
          </Button>
        </View>

        {/* Button Tests */}
        <View style={styles.section}>
          <Text type={TextTypes.Heading3} style={styles.sectionTitle}>
            Button Tests
          </Text>
          
          <Button 
            appearance={ButtonAppearance.Primary}
            onPress={() => handleButtonPress("Primary")}
          >
            Primary Button
          </Button>
          
          <Button 
            appearance={ButtonAppearance.Secondary}
            onPress={() => handleButtonPress("Secondary")}
          >
            Secondary Button
          </Button>
        </View>

        {/* Link Tests */}
        <View style={styles.section}>
          <Text type={TextTypes.Heading3} style={styles.sectionTitle}>
            Link Tests
          </Text>
          
          <Link 
            to="https://example.com"
            onClick={() => handleLinkPress("External")}
          >
            External Link
          </Link>
        </View>

        {/* Interactive Tests */}
        <View style={styles.section}>
          <Text type={TextTypes.Heading3} style={styles.sectionTitle}>
            Interactive Tests
          </Text>
          
          <Button 
            appearance={ButtonAppearance.Primary}
            onPress={() => {
              console.log("Navigating to test page...");
              navigation.navigate("TestPage");
            }}
          >
            Navigate to This Page Again
          </Button>
          
          <Button 
            appearance={ButtonAppearance.Secondary}
            onPress={() => {
              console.log("Showing alert...");
              alert("This is a test alert!");
            }}
          >
            Show Alert
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default TestPage; 