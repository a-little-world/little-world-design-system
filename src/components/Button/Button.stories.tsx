import React from 'react';
import styled from 'styled-components';

import tokens from '../../tokens';
import { ArrowLeftIcon, InfoIcon, PhoneIcon } from '../Icon';
import Text from '../Text/Text';
import TextTypes from '../Text/TextTypes';
import Button, { ButtonVariations } from './Button';

export default {
  component: Button,
  title: 'Components/Button',
};

export const Default = args => <Button {...args}>Blah Blah</Button>;

export const ButtonOption = args => (
  <Button variation={ButtonVariations.Option} {...args}>
    <PhoneIcon label="phone icon" labelId="phone icon" />
    Call partner
  </Button>
);

export const ButtonControl = args => (
  <Button variation={ButtonVariations.Control}>
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
    <Button variation={ButtonVariations.Icon} color={args.color}>
      <InfoIcon label="info" labelId="info" />
    </Button>
    <Button variation={ButtonVariations.Icon} color={args.color}>
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
      <StyledSpan tag="span" type={TextTypes.Body4}>
        This is the default styling:
      </StyledSpan>
      <Button variation={ButtonVariations.Inline}>
        <Text type={TextTypes.Body4} tag="span">
          Click to activate.
        </Text>
      </Button>
    </span>
    <span>
      <StyledSpan tag="span" type={TextTypes.Body4}>
        This is with the color prop set:
      </StyledSpan>
      <Button variation={ButtonVariations.Inline} color="red">
        <Text type={TextTypes.Body4} tag="span">
          Click to activate.
        </Text>
      </Button>
    </span>
  </div>
);
