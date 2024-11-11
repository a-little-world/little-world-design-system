import React from 'react';
import styled, { css } from 'styled-components';

import { ValueOf } from '../../utils/types';
import Text from '../Text/Text';
import TextTypes from '../Text/TextTypes';

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
  max-height: 100%;

  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing.small};

  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    padding: ${({ $width, theme }) =>
      $width === CardSizes.Small ? theme.spacing.medium : theme.spacing.large};

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

const StyledCardHeader = styled(Text)`
  margin-bottom: ${({ theme }) => theme.spacing.small};
`;

export const CardContent = styled.div<{
  $align?: string;
  $textAlign?: string;
  $gap?: string;
  $marginBottom?: string;
  children: React.ReactNode;
}>`
  display: flex;
  flex-direction: column;
  align-items: ${({ $align }) => $align || 'center'};
  gap: ${({ $gap, theme }) => $gap || theme.spacing.small};
  text-align: ${({ $textAlign }) => $textAlign || 'left'};
  margin-bottom: ${({ $marginBottom, theme }) =>
    $marginBottom || theme.spacing.small};
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

type CardProps = {
  borderColor?: string;
  children: React.ReactNode;
  className?: string;
  height?: string;
  width?: ValueOf<typeof CardSizes>;
};

export const CardHeader: React.FC<{
  align?: string;
  children: React.ReactNode;
  textColor?: string;
  textType?: keyof typeof TextTypes;
}> = ({ children, textColor, textType }) => (
  <StyledCardHeader
    type={textType || TextTypes.Heading4}
    center
    color={textColor}
  >
    {children}
  </StyledCardHeader>
);

export const CardFooter: React.FC<{
  align?: string;
  children: React.ReactNode;
}> = ({ children, align }) => <Footer $align={align}>{children}</Footer>;

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
