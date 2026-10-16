import React from 'react';

import ProgressBar, {
  ProgressBarSizes,
  ProgressBarVariations,
} from './ProgressBar';

export default {
  component: ProgressBar,
  title: 'Components/ProgressBar',
  argTypes: {
    variation: {
      control: 'select',
      options: Object.values(ProgressBarVariations),
    },
    size: {
      control: 'select',
      options: Object.values(ProgressBarSizes),
    },
  },
};

export const Basic = args => {
  return <ProgressBar {...args} />;
};

Basic.args = {
  variation: ProgressBarVariations.Basic,
  max: 10,
  value: 4,
};

export const BasicLarge = args => {
  return <ProgressBar {...args} />;
};

BasicLarge.args = {
  variation: ProgressBarVariations.Basic,
  max: 10,
  value: 4,
  size: ProgressBarSizes.Large,
};

export const ScaleEmpty = args => {
  return <ProgressBar {...args} />;
};

ScaleEmpty.args = {
  variation: ProgressBarVariations.Scale,
  value: 0,
  max: 300,
  step: 30,
  label: 'Call minutes',
};

export const ScaleBetween = args => {
  return <ProgressBar {...args} />;
};

ScaleBetween.args = {
  variation: ProgressBarVariations.Scale,
  value: 15,
  max: 300,
  step: 30,
  label: 'Call minutes',
};

export const ScaleMid = args => {
  return <ProgressBar {...args} />;
};

ScaleMid.args = {
  variation: ProgressBarVariations.Scale,
  value: 150,
  max: 300,
  step: 30,
  label: 'Call minutes',
  endLabel: '300 Min',
};

export const ScaleWithHeader = args => {
  return <ProgressBar {...args} />;
};

ScaleWithHeader.args = {
  variation: ProgressBarVariations.Scale,
  value: 165,
  max: 300,
  step: 30,
  label: 'Call minutes',
  title: 'Gesprächsminuten',
  scoreRest: 'von 300 Minuten',
  endLabel: '300 Min',
};

ScaleWithHeader.parameters = {
  docs: {
    description: {
      story:
        'Optional header: title on the left, score on the right. The large blue figure is the current value; `scoreRest` is the translated remainder (units, max, connector).',
    },
  },
};

export const ScaleSmall = args => {
  return <ProgressBar {...args} />;
};

ScaleSmall.args = {
  variation: ProgressBarVariations.Scale,
  size: ProgressBarSizes.Small,
  value: 165,
  max: 300,
  step: 30,
  label: 'Call minutes',
  title: 'Gesprächsminuten',
  scoreRest: 'von 300 Minuten',
  endLabel: '300 Min',
};

export const ScaleComplete = args => {
  return <ProgressBar {...args} />;
};

ScaleComplete.args = {
  variation: ProgressBarVariations.Scale,
  value: 300,
  max: 300,
  step: 30,
  label: 'Call minutes',
  endLabel: '300 Min',
};

export const ScaleCustom = args => {
  return <ProgressBar {...args} />;
};

ScaleCustom.args = {
  variation: ProgressBarVariations.Scale,
  value: 45,
  max: 120,
  step: 15,
  label: 'Call minutes',
};

export const ScaleNoLabels = args => {
  return <ProgressBar {...args} />;
};

ScaleNoLabels.args = {
  variation: ProgressBarVariations.Scale,
  value: 165,
  max: 300,
  step: 30,
  showScale: false,
  label: 'Call minutes',
};

export const ScaleAlignment = args => {
  return <ProgressBar {...args} />;
};

ScaleAlignment.args = {
  variation: ProgressBarVariations.Scale,
  value: 150,
  max: 300,
  step: 30,
  label: 'Call minutes',
};

ScaleAlignment.parameters = {
  docs: {
    description: {
      story:
        'Each mid-scale number is centred under its marker. The number row inset equals the frame padding plus border.',
    },
  },
};

export const ScaleNarrow = args => {
  return (
    <div style={{ maxWidth: 400 }}>
      <ProgressBar {...args} />
    </div>
  );
};

ScaleNarrow.args = {
  variation: ProgressBarVariations.Scale,
  value: 165,
  max: 300,
  step: 30,
  label: 'Call minutes',
  endLabel: '300 Min',
};

ScaleNarrow.parameters = {
  docs: {
    description: {
      story:
        'Below small: the 3-label set (0, 150, 300). The midpoint is not carried into wider sets.',
    },
  },
};

export const ScaleWidthSmall = args => {
  return (
    <div style={{ maxWidth: 600 }}>
      <ProgressBar {...args} />
    </div>
  );
};

ScaleWidthSmall.args = {
  variation: ProgressBarVariations.Scale,
  value: 165,
  max: 300,
  step: 30,
  label: 'Call minutes',
  endLabel: '300 Min',
};

ScaleWidthSmall.parameters = {
  docs: {
    description: {
      story:
        'Small to medium viewport: the 6-label set (0, 60, 120, 180, 240, 300). 150 is hidden here so spacing stays even.',
    },
  },
};

export const ScaleUnevenStep = args => {
  return <ProgressBar {...args} />;
};

ScaleUnevenStep.args = {
  variation: ProgressBarVariations.Scale,
  value: 45,
  max: 100,
  step: 30,
  label: 'Progress',
};

ScaleUnevenStep.parameters = {
  docs: {
    description: {
      story:
        'Step does not divide max: ticks at 30, 60 and 90. Wide layouts label every tick; narrow layouts fall back to multiples of the step.',
    },
  },
};
