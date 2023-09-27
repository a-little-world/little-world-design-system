import React from 'react';
import * as RadixLabel from '@radix-ui/react-label';
import styled, { css } from 'styled-components';
import { BODY_3_CSS } from '../Text/styles';
import { QuestionIcon } from '../Icon';
import Button, { ButtonVariations } from '../Button/Button';
import ToolTip from '../ToolTip/ToolTip';
import { coreColors } from '../../tokens/core';
import tokens from '../../tokens';
import textParser from '../../utils/parser';
import InputError from '../InputError/InputError';

const LabelContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr max-content;
  align-items: end;
  gap: ${tokens.spacing.xxxsmall};
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
      display: ${$inline ? 'inline' : 'block'};
      margin-bottom: ${$marginBottom || '0'};
      gap: ${tokens.spacing.xxxsmall};
    `}
`;

type LabelProps = RadixLabel.LabelProps & {
  bold?: boolean;
  inline?: boolean;
  marginBottom?: string;
  toolTipText?: string;
  canHaveError?: boolean;
  error?: string;
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
  canHaveError,
  error,
}) => {
  const LabelEl = (
    <StyledLabel
      $bold={bold}
      $inline={Boolean(inline || toolTipText)}
      $marginBottom={marginBottom}
      className={className}
      asChild={asChild}
      htmlFor={htmlFor}
    >
      {typeof children === 'string' ? textParser(children) : children}
      {toolTipText && (
        <ToolTip
          trigger={
            <Button variation={ButtonVariations.Icon}>
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

  return canHaveError ? (
    <LabelContainer>
      {LabelEl}
      <InputError visible={Boolean(error)}>{error}</InputError>
    </LabelContainer>
  ) : (
    LabelEl
  );
};

export default Label;
