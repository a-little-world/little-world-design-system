import React from 'react';
import styled, { css } from 'styled-components';

import tokens from '../../tokens';

export enum CardSizes {
  Small = '360px',
  Medium = '560px',
  Large = '720px',
}

const StyledCard = styled.div<{
  $borderColor?: string;
  $height?: string;
  $width?: string;
}>`
  border-radius: 40px;
  background: ${({ theme }) => theme.color.surface.primary};
  border: 1px solid
    ${({ theme, $borderColor }) => $borderColor || theme.color.border.subtle};
  box-shadow: 0px 1px 25px 1px rgba(0, 0, 0, 0.05);
  width: 100%;
  max-width: 100%;

  display: flex;
  flex-direction: column;
  padding: ${tokens.spacing.small};

  @media (min-width: ${tokens.breakpoints.small}) {
    padding: ${({ $width }) =>
      $width === CardSizes.Small
        ? tokens.spacing.medium
        : tokens.spacing.large};

    ${({ $width }) =>
      $width &&
      css`
        width: ${$width};
      `}
  }

  ${({ $height }) =>
    $height &&
    css`
      height: ${$height};
    `}
`;

type CardProps = {
  borderColor?: string;
  children: React.ReactNode;
  className?: string;
  height?: string;
  width?: keyof typeof CardSizes;
};

const Card: React.FC<CardProps> = ({
  borderColor,
  children,
  className,
  height,
  width,
}) => (
  <StyledCard
    className={className}
    $borderColor={borderColor}
    $height={height}
    $width={width}
  >
    {children}
  </StyledCard>
);

export default Card;
