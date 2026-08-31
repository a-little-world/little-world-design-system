import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";

import * as AllExports from "@a-little-world/little-world-design-system-native";

// Filter to only get icon components (those ending with 'Icon')
const Icons = Object.fromEntries(
  Object.entries(AllExports).filter(([name]) => name.endsWith('Icon'))
);

const meta = {
  title: "Icon",
  // We're not using a specific component here as we're showing multiple
  parameters: {
    controls: { expanded: true },
  },
  decorators: [
    (Story) => (
      <ScrollView style={{ padding: 16 }}>
        <Story />
      </ScrollView>
    ),
  ],
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  iconContainer: {
    width: 100,
    height: 120,
    margin: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconLabel: {
    marginTop: 8,
    textAlign: 'center',
    fontSize: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 16,
    width: '100%',
  },
  sizeLabel: {
    fontSize: 14,
    marginBottom: 8,
  }
});

// Display all icons in different sizes
export const AllIcons: Story = {
  render: () => {
    // Get all icon components from the export
    const IconComponents = Object.entries(Icons);

    return (
      <View style={styles.container}>
        <Text style={styles.sectionTitle}>All Icons</Text>
        {IconComponents.map(([name, IconComponent]) => {
          // Use type assertion to handle dynamic component
          const Component = IconComponent as React.FC<any>;
          return (
            <View key={name} style={styles.iconContainer}>
              <Component color="#0063AF" width={32} height={32} />
              <Text style={styles.iconLabel}>{name}</Text>
            </View>
          );
        })}
      </View>
    );
  }
};

export const WithDisplayNumber: Story = {
  render: () => (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Display Number</Text>
      <View style={styles.iconContainer}>
        <AllExports.CalendarIcon
          label="Calendar day"
          color="#0063AF"
          width={24}
          height={24}
          displayNumber={8}
        />
        <Text style={styles.iconLabel}>24px</Text>
      </View>
      <View style={styles.iconContainer}>
        <AllExports.CalendarIcon
          label="Calendar day"
          color="#0063AF"
          width={32}
          height={32}
          displayNumber={8}
        />
        <Text style={styles.iconLabel}>32px</Text>
      </View>
      <View style={styles.iconContainer}>
        <AllExports.CalendarIcon
          label="Calendar day"
          color="#0063AF"
          width={48}
          height={48}
          displayNumber={15}
        />
        <Text style={styles.iconLabel}>48px</Text>
      </View>
      <View style={styles.iconContainer}>
        <AllExports.StackIcon
          label="Stack count"
          color="#0063AF"
          width={32}
          height={32}
          displayNumber={3}
          displayNumberTop={2}
          displayNumberRight={4}
        />
        <Text style={styles.iconLabel}>Stack offset</Text>
      </View>
    </View>
  ),
}; 