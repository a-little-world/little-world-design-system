import React from 'react';
import styled, { css } from 'styled-components';

import {
  CardBaseProps,
  CardContentProps,
  CardDimensions,
  CardFooterProps,
  CardHeaderProps,
  CardSizes,
} from '@a-little-world/little-world-design-system-core';
import Text from '../Text/Text';
import { TextTypes } from '@a-little-world/little-world-design-system-core';
import { pixelate } from '../../utils/styles';

export { CardSizes, CardDimensions };

const StyledCard = styled.div<{
  $borderColor?: string;
  $height?: string;
  $width?: CardSizes;
}>`
  border-radius: ${({ theme }) => theme.radius.small};
  background: ${({ theme }) => theme.color.surface.primary};
  border: 1px solid
    ${({ theme, $borderColor }) => $borderColor || theme.color.border.subtle};
  box-shadow: 0px 1px 25px 1px rgba(0, 0, 0, 0.05);
  width: 100%;
  max-width: 100%;
  max-height: 100%;

  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing.small};

  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    border-radius: ${({ theme }) => theme.radius.xxlarge};
    padding: ${({ $width, theme }) =>
      $width === pixelate(CardDimensions[CardSizes.Small])
        ? theme.spacing.medium
        : theme.spacing.large};

    ${({ $width }) =>
      $width &&
      css`
        width: ${pixelate(CardDimensions[$width])};
      `}
  }

  ${({ $height }) =>
    $height &&
    css`
      height: ${$height};
    `}
`;

const StyledCardHeader = styled(Text)`
  margin-bottom: ${({ theme }) => theme.spacing.small};
`;

export const CardContent = styled.div<CardContentProps>`
  display: flex;
  flex-direction: column;
  align-items: ${({ align }) => align || 'center'};
  gap: ${({ gap, theme }) => gap || theme.spacing.small};
  text-align: ${({ textAlign }) => textAlign || 'left'};
  margin-bottom: ${({ marginBottom, theme }) =>
    marginBottom || theme.spacing.small};
  overflow: scroll;
`;

const Footer = styled.div<{ $align?: string }>`
  display: flex;
  order: 1;
  margin-top: auto;
  width: 100%;
  gap: ${({ theme }) => theme.spacing.small};

  ${({ $align }) =>
    $align &&
    css`
      justify-content: ${$align};
    `};
`;

type CardProps = CardBaseProps & {
  className?: string;
};

export const CardHeader: React.FC<CardHeaderProps> = ({
  children,
  textColor,
  textType,
}) => (
  <StyledCardHeader
    type={textType || TextTypes.Heading4}
    center
    color={textColor}
  >
    {children}
  </StyledCardHeader>
);

export const CardFooter: React.FC<CardFooterProps> = ({ children, align }) => (
  <Footer $align={align}>{children}</Footer>
);

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
    $height={height as string}
    $width={width}
  >
    {children}
  </StyledCard>
);

export default Card;
