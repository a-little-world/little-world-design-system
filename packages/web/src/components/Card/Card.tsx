import React from 'react';
import styled, { css } from 'styled-components';

import {
  CardBaseProps,
  CardContentProps,
  CardDimensions,
  CardFooterProps,
  CardHeaderProps,
  CardSizes,
  FlexAlignType,
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
        width: ${$width === CardSizes.FullWidth
          ? '100%'
          : pixelate(CardDimensions[$width])};
      `}
  }

  ${({ $height }) =>
    $height &&
    css`
      height: ${$height};
    `}
`;

const StyledCardHeader = styled(Text)<{ $marginBottom?: string | number }>`
  margin-bottom: ${({ $marginBottom, theme }) =>
    $marginBottom || theme.spacing.small};
`;

const StyledCardHeaderContainer = styled.div<{
  $align?: FlexAlignType;
  $marginBottom?: string | number;
}>`
  display: flex;
  flex-direction: column;
  align-items: ${({ $align }) => $align || 'center'};
  justify-content: center;
  margin-bottom: ${({ $marginBottom, theme }) =>
    $marginBottom || theme.spacing.small};
  width: 100%;
`;

export const StyledCardContent = styled.div<{
  $align?: FlexAlignType;
  $textAlign?: string;
  $gap?: string | number;
  $marginBottom?: string | number;
  $scrollable?: boolean;
}>`
  display: flex;
  flex-direction: column;
  align-items: ${({ $align }) => $align || 'center'};
  gap: ${({ $gap, theme }) => $gap || theme.spacing.small};
  text-align: ${({ $textAlign }) => $textAlign || 'left'};
  margin-bottom: ${({ $marginBottom, theme }) =>
    $marginBottom || theme.spacing.small};

  ${({ $scrollable }) =>
    $scrollable &&
    css`
      overflow: scroll;
    `}
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
  center = true,
  asContainer,
  className,
  children,
  marginBottom,
  textColor,
  textType,
  align,
}) => {
  if (asContainer) {
    return (
      <StyledCardHeaderContainer
        className={className}
        $align={align || (center ? 'center' : 'flex-start')}
        $marginBottom={marginBottom}
      >
        {children}
      </StyledCardHeaderContainer>
    );
  }

  return (
    <StyledCardHeader
      className={className}
      type={textType || TextTypes.Heading4}
      center={center}
      color={textColor}
      $marginBottom={marginBottom}
    >
      {children}
    </StyledCardHeader>
  );
};

export const CardContent: React.FC<CardContentProps> = ({
  children,
  className,
  align,
  textAlign,
  gap,
  marginBottom,
  scrollable = true,
}) => (
  <StyledCardContent
    className={className}
    $align={align}
    $textAlign={textAlign}
    $gap={gap}
    $marginBottom={marginBottom}
    $scrollable={scrollable}
  >
    {children}
  </StyledCardContent>
);

export const CardFooter: React.FC<CardFooterProps> = ({
  children,
  className,
  align,
}) => (
  <Footer className={className} $align={align}>
    {children}
  </Footer>
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
