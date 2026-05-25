import React from 'react';

import Switch from './Switch';
import Button from '../Button/Button';

export default {
  component: Switch,
  title: 'Components/Switch',
};

export const Default = args => {
  return <Switch {...args} />;
};

export const LabelInline = args => {
  return <Switch {...args} labelInline label="Switch me" />;
};

export const CannotError = args => {
  return (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Switch {...args} cannotError label="Switch me" />
      <Button>Click me</Button>
      <Switch cannotError label="Switch me" labelInline />
    </div>
  );
};
