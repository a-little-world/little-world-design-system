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
  box-shadow: 1px 2px 5px rgb(0 0 0 / 7%);
  display: flex;
  flex-direction: column;
  padding: ${tokens.spacing.small};

  @media (min-width: ${tokens.breakpoints.small}) {
    padding: ${tokens.spacing.large};
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
