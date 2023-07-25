import React, { useState } from 'react';
import { ArrowLeftIcon, InfoIcon } from '../Icon';
import Button, { ButtonTypes } from './Button';
import Text from '../Text/Text';
import styled from 'styled-components';
import tokens from '../../tokens';

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
  <div style={{ display: 'flex', gap: tokens.spacing.large }}>
    <Button variation={ButtonTypes.Icon} color={args.color}>
      <InfoIcon label="info" labelId="info" />
    </Button>
    <Button variation={ButtonTypes.Icon} color={args.color}>
      <InfoIcon circular label="info" labelId="info" />
    </Button>
  </div>
);

const StyledSpan = styled(Text)`
  margin-right: ${tokens.spacing.xxsmall};
`;

export const ButtonInline = args => (
  <div>
    <span>
      <StyledSpan tag="span" type="Body2">
        This is the default styling:
      </StyledSpan>
      <Button variation={ButtonTypes.Inline}>
        <Text type="Body2" tag="span">
          Click to activate.
        </Text>
      </Button>
    </span>
    <span>
      <StyledSpan tag="span" type="Body2">
        This is with the backgroundColor prop set:
      </StyledSpan>
      <Button variation={ButtonTypes.Inline} backgroundColor="red">
        <Text type="Body2" color={'red'} tag="span">
          Click to activate.
        </Text>
      </Button>
    </span>
  </div>
);
