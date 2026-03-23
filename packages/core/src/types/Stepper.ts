import type { ComponentType } from 'react';

export const StepperSizes = {
  Small: 'small',
  Medium: 'medium',
  Large: 'large',
} as const;

export type StepperSize = (typeof StepperSizes)[keyof typeof StepperSizes];

export const StepperOrientations = {
  Horizontal: 'horizontal',
  Vertical: 'vertical',
} as const;

export type StepperOrientation =
  (typeof StepperOrientations)[keyof typeof StepperOrientations];

export type StepperStep = {
  id: string;
  label: string;
  description?: string;
  Icon?: ComponentType<{ className?: string }>;
};

export type StepperProps = {
  steps: StepperStep[];
  activeStepIndex: number;
  onSelectStep?: (id: string) => void;
  orientation?: StepperOrientation;
  size?: StepperSize;
};

type StepperSizeDimensions = {
  stepCircleSize: number;
  connectorThickness: number;
  connectorLength: number;
};

export const StepperDimensions: Record<StepperSize, StepperSizeDimensions> = {
  small: {
    stepCircleSize: 24,
    connectorThickness: 2,
    connectorLength: 16,
  },
  medium: {
    stepCircleSize: 32,
    connectorThickness: 2,
    connectorLength: 20,
  },
  large: {
    stepCircleSize: 40,
    connectorThickness: 3,
    connectorLength: 24,
  },
};
