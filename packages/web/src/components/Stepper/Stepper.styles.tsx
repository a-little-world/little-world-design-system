import {
  StepperDimensions,
  StepperOrientation,
  StepperOrientations,
  StepperSize,
} from '@a-little-world/little-world-design-system-core';
import styled, { css } from 'styled-components';
import { pixelate } from '../../utils/styles';
import Text from '../Text/Text';

export const StepperContainer = styled.div<{
  $orientation: StepperOrientation;
}>`
  display: flex;
  flex-direction: ${({ $orientation }) =>
    $orientation === StepperOrientations.Vertical ? 'column' : 'row'};
  width: 100%;
`;

export const StepItem = styled.div<{
  $isCompleted: boolean;
  $isActive: boolean;
  $orientation: StepperOrientation;
  $size: StepperSize;
}>`
  display: flex;
  flex-direction: ${({ $orientation }) =>
    $orientation === StepperOrientations.Horizontal ? 'column' : 'row'};
  align-items: ${({ $orientation }) =>
    $orientation === StepperOrientations.Vertical ? 'flex-start' : 'center'};
  flex: ${({ $orientation }) =>
    $orientation === StepperOrientations.Vertical ? 'none' : '1'};
  position: relative;
  gap: ${({ theme }) => theme.spacing.xxsmall};
  text-align: ${({ $orientation }) =>
    $orientation === StepperOrientations.Horizontal ? 'center' : 'left'};

  ${({ $orientation, $size }) => {
    const currentSize = StepperDimensions[$size];

    return `
        min-height: ${$orientation === StepperOrientations.Vertical ? 'auto' : pixelate(currentSize.stepCircleSize)};
      `;
  }}

  ${({ theme }) => css`
    @media (min-width: ${theme.breakpoints.medium}) {
      gap: ${theme.spacing.small};
    }
  `}
`;

export const StepCircleContainer = styled.div<{
  $orientation: StepperOrientation;
  $size: StepperSize;
}>`
  display: flex;
  flex-direction: ${({ $orientation }) =>
    $orientation === StepperOrientations.Vertical ? 'column' : 'row'};
  align-items: center;
  flex-shrink: 0;

  ${({ $orientation, $size }) => {
    if ($orientation === StepperOrientations.Vertical) return '';
    const dimensions = StepperDimensions[$size];

    return `
        width: 100%;
        min-height: ${pixelate(dimensions.stepCircleSize)};
        justify-content: center;
        position: relative;
      `;
  }}
`;

export const StepCircle = styled.div<{
  $isCompleted: boolean;
  $isActive: boolean;
  $size: StepperSize;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.radius.half};
  flex-shrink: 0;
  transition: all 0.2s ease;
  position: relative;
  z-index: 1;

  ${({ $size }) => {
    const dimensions = StepperDimensions[$size];

    return `
        width: ${pixelate(dimensions.stepCircleSize)};
        height: ${pixelate(dimensions.stepCircleSize)};
      `;
  }}

  ${({ $isCompleted, $isActive, theme }) => {
    if ($isCompleted) {
      return `
          background-color: ${theme.color.surface.success};
          color: ${theme.color.text.success};
          border: 2px solid ${theme.color.border.success};
        `;
    } else if ($isActive) {
      return `
          background-color: ${theme.color.surface.primary};
          color: ${theme.color.text.secondary};
          border: 2px solid ${theme.color.border.success};
        `;
    } else {
      return `
          background-color: ${theme.color.surface.secondary};
          color: ${theme.color.text.secondary};
          border: 2px solid ${theme.color.border.moderate};
        `;
    }
  }}
`;

export const StepContent = styled.div<{ $orientation: StepperOrientation }>`
  display: flex;
  flex-direction: column;
  flex: 1;

  ${({ $orientation }) =>
    $orientation === StepperOrientations.Horizontal &&
    `
      text-align: center;
    `}
`;

export const StepLabel = styled(Text)<{
  $isCompleted: boolean;
  $isActive: boolean;
  $size: StepperSize;
  $hasDescription: boolean;
}>`
  margin-top: ${({ $hasDescription, theme }) =>
    $hasDescription ? '0' : theme.spacing.xxxsmall};
  font-weight: ${({ $isActive }) => ($isActive ? 'bold' : 'normal')};
  line-height: ${({ $hasDescription }) => ($hasDescription ? '1' : '1.25')};
  color: ${({ $isCompleted, $isActive, theme }) => {
    if ($isCompleted) return theme.color.text.primary;
    if ($isActive) return theme.color.text.primary;
    return theme.color.text.secondary;
  }};
`;

export const StepDescription = styled(Text)<{ $size: StepperSize }>`
  font-weight: normal;
  font-size: ${({ $size }) => {
    const sizes = {
      small: '0.875rem',
      medium: '0.875rem',
      large: '1rem',
    };
    return sizes[$size];
  }};
  color: ${({ theme }) => theme.color.text.secondary};
`;

export const StepConnector = styled.div<{
  $isCompleted: boolean;
  $orientation: StepperOrientation;
  $size: StepperSize;
}>`
  ${({ $orientation, $size }) => {
    const dimensions = StepperDimensions[$size];

    if ($orientation === StepperOrientations.Vertical) {
      return `
          width: ${pixelate(dimensions.connectorThickness)};
          height: ${pixelate(dimensions.connectorLength)};
        `;
    } else {
      return `
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translateY(-50%);
          width: 100%;
          height: ${pixelate(dimensions.connectorThickness)};
        `;
    }
  }}

  background-color: ${({ $isCompleted, theme }) =>
    $isCompleted ? theme.color.border.success : theme.color.border.moderate};
  transition: background-color 0.2s ease;
`;
