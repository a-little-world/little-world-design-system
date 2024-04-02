import * as RadixLabel from '@radix-ui/react-label';
import React from 'react';
import styled, { css } from 'styled-components';

import tokens from '../../tokens';
import { coreColors } from '../../tokens/core';
import textParser from '../../utils/parser';
import Button, { ButtonSizes, ButtonVariations } from '../Button/Button';
import { QuestionIcon } from '../Icon';
import { BODY_5_CSS } from '../Text/styles';
import ToolTip from '../ToolTip/ToolTip';

const StyledLabel = styled(RadixLabel.Root)<{
  $bold?: boolean;
  $inline?: boolean;
  $marginBottom?: string;
}>`
  ${BODY_5_CSS}
  width: fit-content;

  ${({ $bold, $inline, $marginBottom }) =>
    css`
      ${$bold && 'font-weight: bold;'}
      display: ${$inline ? 'inline-flex' : 'block'};
      margin-bottom: ${$marginBottom ?? tokens.spacing.xsmall};
      gap: ${tokens.spacing.xxxsmall};
      align-items: center;
    `}
`;

type LabelProps = RadixLabel.LabelProps & {
  bold?: boolean;
  inline?: boolean;
  marginBottom?: string;
  toolTipText?: string;
};

const Label: React.FC<LabelProps> = ({
  bold,
  className,
  children,
  inline,
  marginBottom,
  asChild,
  htmlFor,
  toolTipText,
}) => {
  return (
    <StyledLabel
      $bold={bold}
      $inline={Boolean(inline || toolTipText)}
      $marginBottom={inline ? '0px' : marginBottom}
      className={className}
      asChild={asChild}
      htmlFor={htmlFor}
    >
      {typeof children === 'string' ? textParser(children) : children}
      {toolTipText && (
        <ToolTip
          trigger={
            <Button
              variation={ButtonVariations.Icon}
              size={ButtonSizes.Small}
              borderColor={coreColors.blue10}
              color={coreColors.blue10}
            >
              <QuestionIcon label="questionIcon" labelId="questionIcon" />
            </Button>
          }
          text={toolTipText}
        />
      )}
    </StyledLabel>
  );
};

export default Label;
