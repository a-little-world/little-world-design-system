import { TextTypes } from '@a-little-world/little-world-design-system-core';
import { HeartIcon } from '../Icon';

import Text from '../Text/Text';
import ProgressRing, {
  ProgressRingAppearances,
  ProgressRingSizes,
  ProgressRingTones,
} from './ProgressRing';

export default {
  component: ProgressRing,
  title: 'Components/ProgressRing',
  argTypes: {
    size: {
      control: 'select',
      options: Object.values(ProgressRingSizes),
    },
    tone: {
      control: 'select',
      options: Object.values(ProgressRingTones),
    },
    appearance: {
      control: 'select',
      options: Object.values(ProgressRingAppearances),
    },
  },
};

export const Default = args => {
  return <ProgressRing {...args} />;
};

Default.args = {
  value: 3,
  max: 10,
  label: 'Progress',
  size: ProgressRingSizes.Large,
  tone: ProgressRingTones.Accent,
  caption: 'Complete',
};

export const XLarge = args => {
  return <ProgressRing {...args} />;
};

XLarge.args = {
  value: 3,
  max: 10,
  label: 'Progress',
  size: ProgressRingSizes.XLarge,
  tone: ProgressRingTones.Accent,
  caption: 'Complete',
};

export const Medium = args => {
  return <ProgressRing {...args} />;
};

Medium.args = {
  value: 7,
  max: 10,
  label: 'Progress',
  size: ProgressRingSizes.Medium,
  tone: ProgressRingTones.Accent,
  caption: 'Complete',
};

export const Small = args => {
  return <ProgressRing {...args} />;
};

Small.args = {
  value: 7,
  max: 10,
  label: 'Progress',
  size: ProgressRingSizes.Small,
  tone: ProgressRingTones.Accent,
};

export const Success = args => {
  return <ProgressRing {...args} />;
};

Success.args = {
  value: 10,
  max: 10,
  label: 'Complete',
  size: ProgressRingSizes.Large,
  tone: ProgressRingTones.Success,
  caption: 'Done',
};

export const WithCustomCenter = args => {
  return (
    <ProgressRing {...args}>
      <Text tag="span" type={TextTypes.Heading5} bold>
        75%
      </Text>
    </ProgressRing>
  );
};

WithCustomCenter.args = {
  value: 75,
  max: 100,
  label: 'Upload progress',
  size: ProgressRingSizes.Large,
  tone: ProgressRingTones.Accent,
};

export const BadgeInProgress = args => {
  return (
    <ProgressRing {...args}>
      <HeartIcon label="Heart" />
    </ProgressRing>
  );
};

BadgeInProgress.args = {
  value: 7,
  max: 10,
  label: 'Badge in progress',
  size: ProgressRingSizes.Medium,
  tone: ProgressRingTones.Accent,
  appearance: ProgressRingAppearances.Default,
};

export const BadgeComplete = args => {
  return (
    <ProgressRing {...args}>
      <HeartIcon label="Heart" />
    </ProgressRing>
  );
};

BadgeComplete.args = {
  label: 'Badge earned',
  size: ProgressRingSizes.Medium,
  tone: ProgressRingTones.Accent,
  appearance: ProgressRingAppearances.Complete,
};

export const BadgeCompleteSuccess = args => {
  return (
    <ProgressRing {...args}>
      <HeartIcon label="Heart" />
    </ProgressRing>
  );
};

BadgeCompleteSuccess.args = {
  label: 'Badge earned',
  size: ProgressRingSizes.Medium,
  tone: ProgressRingTones.Success,
  appearance: ProgressRingAppearances.Complete,
};

export const BadgeInactive = args => {
  return (
    <ProgressRing {...args}>
      <HeartIcon label="Heart" />
    </ProgressRing>
  );
};

BadgeInactive.args = {
  label: 'Badge locked',
  size: ProgressRingSizes.Medium,
  appearance: ProgressRingAppearances.Inactive,
};
