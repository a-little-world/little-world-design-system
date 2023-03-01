import React from 'react';
import styled, { css } from 'styled-components';

const StyledCard = styled.div<{ $height?: string }>`
  border-radius: 40px;
  background: white;
  padding: 32px;
  border: 1px solid white;
  display: flex;
  flex-direction: column;

  ${({ $height }) =>
    $height &&
    css`
      height: ${$height};
    `}
`;

type CardProps = {
  children: React.ReactNode;
  className?: string;
  height?: string;
};

const Card: React.FC<CardProps> = ({ children, className, height }) => (
  <StyledCard className={className} $height={height}>
    {children}
  </StyledCard>
);

export default Card;
