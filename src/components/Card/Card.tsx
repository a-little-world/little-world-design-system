import React from 'react';
import styled, { css } from 'styled-components';
import tokens from '../../tokens';

export enum CardSizes {
  Small = '360px',
  Large = '540px',
}

const StyledCard = styled.div<{ $height?: string; $width?: string }>`
  border-radius: 40px;
  background: white;
  border: 1px solid white;
  box-shadow: 0px 1px 25px 1px rgba(0, 0, 0, 0.05);

  display: flex;
  flex-direction: column;
  padding: ${tokens.spacing.small};

  @media (min-width: ${tokens.breakpoints.small}) {
    padding: ${({ $width }) =>
      $width === CardSizes.Small
        ? tokens.spacing.medium
        : tokens.spacing.large};
  }

  ${({ $height }) =>
    $height &&
    css`
      height: ${$height};
    `}

  ${({ $width }) =>
    $width &&
    css`
      width: ${$width};
    `}
`;

type CardProps = {
  children: React.ReactNode;
  className?: string;
  height?: string;
  width?: keyof typeof CardSizes;
};

const Card: React.FC<CardProps> = ({ children, className, height, width }) => (
  <StyledCard className={className} $height={height} $width={width}>
    {children}
  </StyledCard>
);

export default Card;
