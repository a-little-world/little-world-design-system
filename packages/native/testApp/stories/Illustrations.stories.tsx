import React from 'react';
import { View, ScrollView } from 'react-native';

import { Text } from '@a-little-world/little-world-design-system-native';
import * as allExports from '@a-little-world/little-world-design-system-native';

// Filter to only get illustration components (those ending with 'Image')
const Illustrations = Object.fromEntries(
  Object.entries(allExports).filter(([name]) => name.endsWith('Image'))
);

const spacing = {
  xxsmall: 4,
  small: 8,
  medium: 16,
};

const IllustrationsScreen = () => (
  <ScrollView>
    <View style={{ 
      flex: 1, 
      flexDirection: 'row', 
      flexWrap: 'wrap', 
      alignItems: 'center',
      justifyContent: 'center',
      padding: spacing.medium,
    }}>
      {Object.entries(Illustrations).map(([name, Component]) => (
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 8,
            padding: 8,
            width: 180,
            marginBottom: spacing.medium,
            marginRight: spacing.medium,
          }}
          key={name}
        >
          <Component 
            label={name}
            key={name} 
            height={100} 
            width={100} 
          />
          <View style={{ marginTop: spacing.xxsmall }}>
            <Text>{name}</Text>
          </View>
        </View>
      ))}
    </View>
  </ScrollView>
);

// Using the newer Storybook CSF format
export default {
  title: 'Components/Illustrations',
};

export const AllVariants = () => <IllustrationsScreen />;
