import React from 'react';
import * as RadixLabel from '@radix-ui/react-label';
import styled, { css } from 'styled-components';
import { BODY_3_CSS } from '../Text/styles';

const StyledLabel = styled(RadixLabel.Root)<{
  $bold?: boolean;
  $marginBottom?: string;
}>`
  ${BODY_3_CSS}

  ${({ $bold }) =>
    $bold &&
    css`
      font-weight: bold;
    `}

    margin-bottom: ${({ $marginBottom }) =>
    $marginBottom ? $marginBottom : '0'};
`;

type LabelProps = RadixLabel.LabelProps & {
  bold?: boolean;
  marginBottom?: string;
};

const Label: React.FC<LabelProps> = ({
  bold,
  className,
  children,
  marginBottom,
  asChild,
  htmlFor,
}) => {
  return (
    <StyledLabel
      $bold={bold}
      $marginBottom={marginBottom}
      className={className}
      asChild={asChild}
      htmlFor={htmlFor}
    >
      {children}
    </StyledLabel>
  );
};

export default Label;
