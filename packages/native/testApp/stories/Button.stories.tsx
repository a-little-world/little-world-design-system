import React from 'react';
import { View } from 'react-native';
import { ButtonAppearance, ButtonSizes, ButtonVariations, tokens, TextTypes } from '@a-little-world/little-world-design-system-core';
import { Button, InfoIcon, PhoneIcon, Text } from '@a-little-world/little-world-design-system-native';

export default {
  component: Button,
  title: 'Components/Button',
  args: {
    disabled: false,
    loading: false,
    color: undefined, // Default color from theme
    onPress: () => console.log('Button pressed'),
  },
  // argTypes: {
  //   disabled: { control: 'boolean' },
  //   loading: { control: 'boolean' },
  //   appearance: { 
  //     control: { type: 'select', options: Object.values(ButtonAppearance) }
  //   },
  //   size: {
  //     control: { type: 'select', options: Object.values(ButtonSizes) }
  //   },
  //   color: { control: 'color' },
  //   onPress: { action: 'pressed' },
  // },
};

export const Default = args => (
  <View style={{ flexDirection: 'row', gap: tokens.spacing.medium, flexWrap: 'wrap' }}>
    <Button {...args}>Primary Appearance</Button>
    <Button {...args}>
      With Icon{' '}
      <InfoIcon label="info" width={16} height={16} color='#FFF' />
    </Button>
    <Button appearance={ButtonAppearance.Secondary} {...args}>Secondary Appearance</Button>
    <Button appearance={ButtonAppearance.Secondary} {...args} loading>Secondary Appearance</Button>
  </View>
);

export const ButtonOption = args => (
  <Button variation={ButtonVariations.Option} {...args}>
    <PhoneIcon label="phone icon" />
    Call partner
  </Button>
);

ButtonOption.args = {
  size: ButtonSizes.Medium,  
};

export const ButtonCircle = args => (
  <View style={{ flexDirection: 'row', gap: tokens.spacing.large }}>
    <Button variation={ButtonVariations.Circle} color={args.color}>
      <InfoIcon label="info" width={20} height={20} color={args.color} />
    </Button>
    <Button
      variation={ButtonVariations.Circle}
      color={args.color}
      size={ButtonSizes.Small}
    >
      <InfoIcon label="info small" color={args.color} />
    </Button>
    <Button
      variation={ButtonVariations.Circle}
      color={args.color}
      size={ButtonSizes.Medium}
    >
      <InfoIcon label="info medium" color={args.color} />
    </Button>
    <Button
      variation={ButtonVariations.Circle}
      color={args.color}
      size={ButtonSizes.Large}
    >
      <InfoIcon label="info large" color={args.color} />
    </Button>
  </View>
);

ButtonCircle.args = {
  color: '#007AFF',
};

export const ButtonIcon = args => (
  <View style={{ flexDirection: 'row', gap: tokens.spacing.large }}>
    <Button variation={ButtonVariations.Icon} color={args.color}>
      <InfoIcon label="info" />
    </Button>
    <Button
      variation={ButtonVariations.Icon}
      color={args.color}
      size={ButtonSizes.Small}
    >
      <InfoIcon circular label="info small" />
    </Button>
    <Button
      variation={ButtonVariations.Icon}
      color={args.color}
      size={ButtonSizes.Medium}
    >
      <InfoIcon circular label="info medium" />
    </Button>
    <Button
      variation={ButtonVariations.Icon}
      color={args.color}
      size={ButtonSizes.Large}
    >
      <InfoIcon circular label="info large" />
    </Button>
  </View>
);

ButtonIcon.args = {
  color: '#000',
};

export const ButtonInline = args => (
  <View>
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Text type={TextTypes.Body4} style={{ marginRight: tokens.spacing.xxsmall }}>
        This is the default styling:
      </Text>
      <Button variation={ButtonVariations.Inline} {...args}>
        <Text type={TextTypes.Body4}>
          Click to activate.
        </Text>
      </Button>
    </View>
    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: tokens.spacing.small }}>
      <Text type={TextTypes.Body4} style={{ marginRight: tokens.spacing.xxsmall }}>
        This is with the color prop set:
      </Text>
      <Button variation={ButtonVariations.Inline} color="red" {...args}>
        <Text type={TextTypes.Body4}>
          Click to activate.
        </Text>
      </Button>
    </View>
  </View>
);

ButtonInline.args = {
  // Specific args for inline buttons
};