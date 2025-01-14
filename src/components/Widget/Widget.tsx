import React from 'react';
import styled, { css } from 'styled-components';

import tokens from '../../tokens';
import { ValueOf } from '../../utils/types';
import TextTypes from '../Text/TextTypes';

export enum WidgetSizes {
  Small = '360px',
  Medium = '560px',
  Large = '720px',
}

const StyledWidget = styled.div<{
  $borderColor?: string;
  $height?: string;
  $width?: string;
}>`
  border-radius: ${({ theme }) =>
    theme.radius.medium}; /* Border-radius for consistency */
  background: ${({ theme }) => theme.color.gradient.orange10};
  border: 1px solid ${({ theme }) => theme.color.border.subtle};
  box-shadow: 0px 1px 15px 1px rgba(0, 0, 0, 0.05);
  width: ${({ $width }) => $width || '300px'}; /* Default smaller width */
  max-width: 100%;
  height: ${({ $height }) => $height || 'auto'}; /* Default smaller height */
  padding: ${({ theme }) => theme.spacing.xsmall}; /* Consistent padding */

  display: flex;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    padding: ${tokens.spacing.xsmall};
    ${({ $width }) =>
      $width &&
      css`
        width: ${$width};
      `}
  }
`;

const StyledWidgetHeader = styled.h3<{ $color?: string }>`
  color: ${({ $color, theme }) => $color || theme.color.text.primary};
  font-size: ${TextTypes.Heading4};
  margin-bottom: ${({ theme }) => theme.spacing.xsmall};
  text-align: center;
`;

export const WidgetContent = styled.div<{
  $align?: string;
  $textAlign?: string;
  $gap?: string;
  $marginBottom?: string;
  children: React.ReactNode;
}>`
  display: flex;
  flex-direction: column;
  align-items: ${({ $align }) => $align || 'center'};
  gap: ${({ $gap, theme }) => $gap || theme.spacing.xxxsmall};
  text-align: ${({ $textAlign }) => $textAlign || 'left'};
  margin-bottom: ${({ $marginBottom, theme }) =>
    $marginBottom || theme.spacing.xxxsmall};
  overflow: hidden;
`;

type WidgetProps = {
  borderColor?: string;
  children: React.ReactNode;
  className?: string;
  height?: string;
  width?: ValueOf<typeof WidgetSizes>;
  header?: string | React.ReactNode;
  footer?: string | React.ReactNode;
};

export const WidgetHeader: React.FC<{
  align?: string;
  children: React.ReactNode;
  textColor?: string;
}> = ({ children, textColor }) => (
  <StyledWidgetHeader $color={textColor}>{children}</StyledWidgetHeader>
);

export const WidgetFooter: React.FC<{
  align?: string;
  children: React.ReactNode;
}> = ({ children, align }) => <Footer $align={align}>{children}</Footer>;

const Footer = styled.div<{ $align?: string }>`
  display: flex;
  order: 1;
  margin-top: auto;
  width: 100%;
  gap: ${({ theme }) => theme.spacing.xxsmall};

  ${({ $align }) =>
    $align &&
    css`
      justify-content: ${$align};
    `};
`;

const Widget: React.FC<WidgetProps> = ({
  borderColor,
  children,
  className,
  footer,
  header,
  height,
  width,
}) => (
  <StyledWidget
    className={className}
    $borderColor={borderColor}
    $height={height}
    $width={width}
  >
    {header && <WidgetHeader>{header}</WidgetHeader>}
    <WidgetContent>{children}</WidgetContent>
    {footer && <WidgetFooter>{footer}</WidgetFooter>}
  </StyledWidget>
);

export default Widget;
