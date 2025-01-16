import React from 'react';

import CallWidget from './CallWidget';
import Widget from './Widget';

export default {
  component: CallWidget,
  title: 'Components/Widget',
};

export const Default = args => <Widget {...args}>Blah Blah</Widget>;

export const Call = args => (
  <CallWidget header="Call" description="120 minutes" isOutgoing />
);
export const MissedCall = args => (
  <CallWidget header="Missed Call" isMissed description="Tap to call back" />
);
