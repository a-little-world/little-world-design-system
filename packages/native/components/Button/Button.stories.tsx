import React from 'react';
import { View } from 'react-native';
import { ButtonAppearance, tokens } from '@a-little-world/little-world-design-system-core';
import { InfoIcon, PhoneIcon } from '../Icon';
import Text from '../Text/Text';
import { TextTypes } from '@a-little-world/little-world-design-system-core';
import Button, { ButtonSizes, ButtonVariations } from './Button';

export default {
  component: Button,
  title: 'Components/Button',
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
    <PhoneIcon label="phone icon" labelId="phone icon" />
    Call partner
  </Button>
);

export const ButtonCircle = args => (
  <View style={{ flexDirection: 'row', gap: tokens.spacing.large }}>
    <Button variation={ButtonVariations.Circle} color={args.color}>
      <InfoIcon label="info" labelId="info" width={20} height={20} />
    </Button>
    <Button
      variation={ButtonVariations.Circle}
      color={args.color}
      size={ButtonSizes.Small}
    >
      <InfoIcon label="info small" labelId="info" />
    </Button>
    <Button
      variation={ButtonVariations.Circle}
      color={args.color}
      size={ButtonSizes.Medium}
    >
      <InfoIcon label="info medium" labelId="info" />
    </Button>
    <Button
      variation={ButtonVariations.Circle}
      color={args.color}
      size={ButtonSizes.Large}
    >
      <InfoIcon label="info large" labelId="info" />
    </Button>
  </View>
);

export const ButtonIcon = args => (
  <View style={{ flexDirection: 'row', gap: tokens.spacing.large }}>
    <Button variation={ButtonVariations.Icon} color={args.color}>
      <InfoIcon label="info" labelId="info" />
    </Button>
    <Button
      variation={ButtonVariations.Icon}
      color={args.color}
      size={ButtonSizes.Small}
    >
      <InfoIcon circular label="info small" labelId="info" />
    </Button>
    <Button
      variation={ButtonVariations.Icon}
      color={args.color}
      size={ButtonSizes.Medium}
    >
      <InfoIcon circular label="info medium" labelId="info" />
    </Button>
    <Button
      variation={ButtonVariations.Icon}
      color={args.color}
      size={ButtonSizes.Large}
    >
      <InfoIcon circular label="info large" labelId="info" />
    </Button>
  </View>
);

export const ButtonInline = args => (
  <View>
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Text type={TextTypes.Body4} style={{ marginRight: tokens.spacing.xxsmall }}>
        This is the default styling:
      </Text>
      <Button variation={ButtonVariations.Inline}>
        <Text type={TextTypes.Body4}>
          Click to activate.
        </Text>
      </Button>
    </View>
    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: tokens.spacing.small }}>
      <Text type={TextTypes.Body4} style={{ marginRight: tokens.spacing.xxsmall }}>
        This is with the color prop set:
      </Text>
      <Button variation={ButtonVariations.Inline} color="red">
        <Text type={TextTypes.Body4}>
          Click to activate.
        </Text>
      </Button>
    </View>
  </View>
);
