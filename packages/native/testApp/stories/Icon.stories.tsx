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

        {/* <Text style={styles.sectionTitle}>Icon Sizes</Text>
        <View style={styles.container}>
          <View style={styles.iconContainer}>
            <Text style={styles.sizeLabel}>Small (16x16)</Text>
            <Icons.AccountIcon width={16} height={16} color="#0063AF" />
          </View>
          <View style={styles.iconContainer}>
            <Text style={styles.sizeLabel}>Medium (24x24)</Text>
            <Icons.AccountIcon width={24} height={24} color="#0063AF" />
          </View>
          <View style={styles.iconContainer}>
            <Text style={styles.sizeLabel}>Large (32x32)</Text>
            <Icons.AccountIcon width={32} height={32} color="#0063AF" />
          </View>
          <View style={styles.iconContainer}>
            <Text style={styles.sizeLabel}>XLarge (40x40)</Text>
            <Icons.AccountIcon width={40} height={40} color="#0063AF" />
          </View>
        </View>

        <Text style={styles.sectionTitle}>Icon Colors</Text>
        <View style={styles.container}>
          <View style={styles.iconContainer}>
            <Icons.AccountIcon width={32} height={32} color="#0063AF" />
            <Text style={styles.iconLabel}>Blue</Text>
          </View>
          <View style={styles.iconContainer}>
            <Icons.AccountIcon width={32} height={32} color="#F39224" />
            <Text style={styles.iconLabel}>Orange</Text>
          </View>
          <View style={styles.iconContainer}>
            <Icons.AccountIcon width={32} height={32} color="#92D050" />
            <Text style={styles.iconLabel}>Green</Text>
          </View>
          <View style={styles.iconContainer}>
            <Icons.AccountIcon width={32} height={32} color="#f91010" />
            <Text style={styles.iconLabel}>Red</Text>
          </View>
          <View style={styles.iconContainer}>
            <Icons.AccountIcon width={32} height={32} color="#000000" />
            <Text style={styles.iconLabel}>Black</Text>
          </View>
        </View> */}
      </View>
    );
  }
}; 