import React from 'react';
import styled, { css } from 'styled-components';

import { ValueOf } from '../../utils/types';
import TextTypes from '../Text/TextTypes';

export enum WidgetSizes {
  Small = '180px',
  Medium = '240px',
  Large = '320px',
}

const StyledWidget = styled.div<{
  $borderColor?: string;
  $height?: string;
  $width?: string;
  $padding?: string;
}>`
  display: flex;
  flex-direction: column;
  border-radius: ${({ theme }) => theme.radius.medium};
  background: rgba(0, 0, 0, 0.1);
  box-shadow: 0px 1px 15px 1px rgba(0, 0, 0, 0.05);
  width: 100%;
  max-width: ${({ $width }) => $width || '100%'};
  height: ${({ $height }) => $height || 'auto'};
  padding: ${({ theme, $padding }) => $padding || theme.spacing.xxsmall};
`;

const StyledWidgetHeader = styled.h3<{ $color?: string }>`
  color: ${({ $color, theme }) => $color || theme.color.text.primary};
  font-size: ${TextTypes.Heading4};
  margin-bottom: ${({ theme }) => theme.spacing.xsmall};
  text-align: center;
`;

export interface WidgetProps {
  borderColor?: string;
  children: React.ReactNode;
  className?: string;
  height?: string;
  width?: ValueOf<typeof WidgetSizes>;
  header?: string | React.ReactNode;
  footer?: string | React.ReactNode;
  padding?: string;
}

export const WidgetHeader: React.FC<{
  align?: string;
  children: React.ReactNode;
  textColor?: string;
}> = ({ children, textColor }) => (
  <StyledWidgetHeader $color={textColor}>{children}</StyledWidgetHeader>
);

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

export const WidgetFooter: React.FC<{
  align?: string;
  children: React.ReactNode;
}> = ({ children, align }) => <Footer $align={align}>{children}</Footer>;

export const Preview = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xxsmall};
`;

const Widget: React.FC<WidgetProps> = ({
  borderColor,
  children,
  className,
  footer,
  header,
  height,
  padding,
  width,
}) => (
  <StyledWidget
    className={className}
    $borderColor={borderColor}
    $height={height}
    $padding={padding}
    $width={width}
  >
    {header && <WidgetHeader>{header}</WidgetHeader>}
    {children}
    {footer && <WidgetFooter>{footer}</WidgetFooter>}
  </StyledWidget>
);

export default Widget;
