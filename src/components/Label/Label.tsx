import React from 'react';
import * as RadixLabel from '@radix-ui/react-label';
import styled, { css } from 'styled-components';
import { BODY_3_CSS } from '../Text/styles';
import { QuestionIcon } from '../Icon';
import Button, { ButtonTypes } from '../Button/Button';
import ToolTip from '../ToolTip/ToolTip';
import { coreColors } from '../../tokens/core';
import tokens from '../../tokens';

export const LabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 8px;
  margin-bottom: ${tokens.spacing.xxsmall};
`;

const StyledLabel = styled(RadixLabel.Root)<{
  $bold?: boolean;
  $inline?: boolean;
  $marginBottom?: string;
}>`
  ${BODY_3_CSS}
  width: fit-content;

  ${({ $bold, $inline, $marginBottom }) =>
    css`
      ${$bold && 'font-weight: bold;'}
      display: ${$inline ? 'inline-flex' : 'block'};
      margin-bottom: ${$marginBottom || '0'};
      gap: ${tokens.spacing.xxxsmall};
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
      $marginBottom={marginBottom}
      className={className}
      asChild={asChild}
      htmlFor={htmlFor}
    >
      {children}
      {toolTipText && (
        <ToolTip
          trigger={
            <Button variation={ButtonTypes.Icon}>
              <QuestionIcon
                height={'16px'}
                width={'16px'}
                label="questionIcon"
                labelId="questionIcon"
                color={coreColors.blue10}
              />
            </Button>
          }
          text={toolTipText}
        />
      )}
    </StyledLabel>
  );
};

export default Label;
