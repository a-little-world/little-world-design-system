import * as RadixLabel from '@radix-ui/react-label';
import React from 'react';
import styled, { css } from 'styled-components';

import textParser from '../../utils/parser';
import Button, { ButtonSizes, ButtonVariations } from '../Button/Button';
import { QuestionIcon } from '../Icon';
import { BODY_5_CSS } from '../Text/styles';
import InfoPopover from '../Popover/InfoPopover';

const StyledLabel = styled(RadixLabel.Root)<{
  $bold?: boolean;
  $inline?: boolean;
  $marginBottom?: string | number;
}>`
  ${BODY_5_CSS}
  width: fit-content;

  ${({ $bold, $inline, $marginBottom, theme }) => css`
    ${$bold && 'font-weight: bold;'}
    display: ${$inline ? 'inline-flex' : 'block'};
    margin-bottom: ${$marginBottom ?? theme.spacing.xxsmall};
    gap: ${theme.spacing.xxxsmall};
    align-items: center;
  `}
`;

const InfoPopoverTrigger = styled(Button)`
  color: ${({ theme }) => theme.color.surface.bold};
`;

type LabelProps = RadixLabel.LabelProps & {
  bold?: boolean;
  inline?: boolean;
  marginBottom?: string | number;
  tooltipText?: string;
};

const Label: React.FC<LabelProps> = ({
  bold,
  className,
  children,
  inline,
  marginBottom,
  asChild,
  htmlFor,
  tooltipText,
}) => {
  return (
    <StyledLabel
      $bold={bold}
      $inline={Boolean(inline || tooltipText)}
      $marginBottom={inline ? '0px' : marginBottom}
      className={className}
      asChild={asChild}
      htmlFor={htmlFor}
    >
      {typeof children === 'string' ? textParser(children) : children}
      {tooltipText && (
        <InfoPopover
          trigger={
            <InfoPopoverTrigger
              variation={ButtonVariations.Icon}
              size={ButtonSizes.Small}
            >
              <QuestionIcon label="questionIcon" />
            </InfoPopoverTrigger>
          }
          text={tooltipText}
        />
      )}
    </StyledLabel>
  );
};

export default Label;
