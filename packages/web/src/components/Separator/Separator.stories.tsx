import React from 'react';

import Text from '../Text/Text';
import { TextTypes } from '@a-little-world/little-world-design-system-core';
import Separator from './Separator';

export default {
  component: Separator,
  title: 'Components/Separator',
};

export const Default = args => (
  <div>
    <Text tag="h3" type={TextTypes.Heading4}>
      Little World
    </Text>
    <div className="Text">Let's separate our content.</div>
    <Separator />
    <div style={{ display: 'flex', height: 20, alignItems: 'center' }}>
      <div className="Text">Blog</div>
      <Separator orientation="vertical" />
      <div className="Text">Docs</div>
      <Separator orientation="vertical" />
      <div className="Text">Source</div>
    </div>
  </div>
);
