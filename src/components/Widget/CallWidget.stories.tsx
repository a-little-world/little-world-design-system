import React from 'react';

import textParser from '../../utils/parser';
import CallWidget from './CallWidget';

export default {
  title: 'Components/Widget/Call',
  component: CallWidget,
};

export const Default = args => <CallWidget {...args} />;

Default.args = {
  header: 'Call',
  description: '120 minutes',
  isOutgoing: true,
};

export const Missed = args => (
  <CallWidget header="Missed Call" isMissed description="Tap to call back" />
);

export const WithParser = args => (
  <>
    {textParser(
      '<CallWidget { "header": "Call", "description": "20 mins", "isMissed": false }></CallWidget>',
      {
        customElements: [
          {
            tag: 'CallWidget',
            Component: CallWidget,
            props: { isOutgoing: true, returnCallLink: 'www.google.com' },
          },
        ],
      },
    )}
  </>
);
