import React from 'react';

import CallWidget from './CallWidget';
import Widget from './Widget';

export default {
  component: Widget,
  title: 'Components/Widget',
};

export const Default = args => <Widget {...args}>Blah Blah</Widget>;

export const Call = args => (
  <CallWidget header="Call" duration="Duration: 120 minutes" />
);
export const MissedCall = args => (
  <CallWidget header="Missed Call" isMissed returnCallText="Call Back" />
);
