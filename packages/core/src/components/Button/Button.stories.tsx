import React from 'react';
import styled from 'styled-components';

import tokens from '../../tokens';
import { InfoIcon, PhoneIcon } from '../Icon';
import Text from '../Text/Text';
import TextTypes from '../Text/TextTypes';
import Button, { ButtonSizes, ButtonVariations } from './Button';

export default {
  component: Button,
  title: 'Components/Button',
};

export const Default = args => (
  <div style={{ display: 'flex', gap: tokens.spacing.large }}>
    <Button {...args}>Blah Blah</Button>
    <Button {...args}>
      Blah Blah{' '}
      <InfoIcon label="info" labelId="infoId" width={16} height={16} />
    </Button>
  </div>
);

export const ButtonOption = args => (
  <Button variation={ButtonVariations.Option} {...args}>
    <PhoneIcon label="phone icon" labelId="phone icon" />
    Call partner
  </Button>
);

export const ButtonCircle = args => (
  <div style={{ display: 'flex', gap: tokens.spacing.large }}>
    <Button variation={ButtonVariations.Circle} color={args.color}>
      <InfoIcon label="info" labelId="info" width={20} height={20} />
    </Button>
    <Button
      variation={ButtonVariations.Circle}
      color={args.color}
      size={ButtonSizes.Small}
    >
      <InfoIcon label="info small" labelId="info" />
    </Button>
    <Button
      variation={ButtonVariations.Circle}
      color={args.color}
      size={ButtonSizes.Medium}
    >
      <InfoIcon label="info medium" labelId="info" />
    </Button>
    <Button
      variation={ButtonVariations.Circle}
      color={args.color}
      size={ButtonSizes.Large}
    >
      <InfoIcon label="info large" labelId="info" />
    </Button>
  </div>
);

export const ButtonIcon = args => (
  <div style={{ display: 'flex', gap: tokens.spacing.large }}>
    <Button variation={ButtonVariations.Icon} color={args.color}>
      <InfoIcon label="info" labelId="info" />
    </Button>
    <Button
      variation={ButtonVariations.Icon}
      color={args.color}
      size={ButtonSizes.Small}
    >
      <InfoIcon circular label="info small" labelId="info" />
    </Button>
    <Button
      variation={ButtonVariations.Icon}
      color={args.color}
      size={ButtonSizes.Medium}
    >
      <InfoIcon circular label="info medium" labelId="info" />
    </Button>
    <Button
      variation={ButtonVariations.Icon}
      color={args.color}
      size={ButtonSizes.Large}
    >
      <InfoIcon circular label="info large" labelId="info" />
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
