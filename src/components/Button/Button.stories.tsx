import React, { useState } from 'react';
import { ArrowLeftIcon, InfoIcon } from '../Icon';
import Button, { ButtonTypes } from './Button';
import Text from '../Text/Text';
import styled from 'styled-components';

export default {
  component: Button,
  title: 'Components/Button',
};

export const Default = args => <Button {...args}>Blah Blah</Button>;

export const ButtonControl = args => (
  <Button variation={ButtonTypes.Control}>
    <ArrowLeftIcon
      label="arrowLeft"
      labelId="arrowLeft"
      width={6}
      height={10}
    />
  </Button>
);

export const ButtonIcon = args => (
  <Button variation={ButtonTypes.Icon}>
    <InfoIcon label="info" labelId="info" />
  </Button>
);

const StyledSpan = styled(Text)`
  margin-right: 8px;
`;

export const ButtonInline = args => (
  <span>
    <StyledSpan tag="span" type="Body2">
      This is some text
    </StyledSpan>
    <Button variation={ButtonTypes.Inline}>
      <Text type="Body2" color={'blue'} tag="span">
        Click to activate.
      </Text>
    </Button>
  </span>
);
