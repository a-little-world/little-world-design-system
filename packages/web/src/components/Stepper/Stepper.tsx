import React from 'react';

import {
  TextTypes,
  type StepperProps,
} from '@a-little-world/little-world-design-system-core';

import { CheckIcon } from '../Icon';
import { isFunction } from 'lodash';

import {
  StepCircle,
  StepCircleContainer,
  StepConnector,
  StepContent,
  StepDescription,
  StepItem,
  StepLabel,
  StepperContainer,
} from './Stepper.styles';
import Text from '../Text/Text';

const Stepper: React.FC<StepperProps> = ({
  onSelectStep,
  activeStepIndex,
  orientation = 'vertical',
  steps,
  size = 'medium',
}) => {
  if (steps.length === 0) {
    return <StepperContainer $orientation={orientation} />;
  }

  return (
    <StepperContainer $orientation={orientation}>
      {steps.map((step, index) => {
        const isActive = index === activeStepIndex;
        const isClickable = isFunction(onSelectStep);
        const isCompleted = index < activeStepIndex;

        return (
          <StepItem
            key={step.id}
            as={isClickable ? 'button' : 'div'}
            onClick={isClickable ? () => onSelectStep(step.id) : undefined}
            $isCompleted={isCompleted}
            $isActive={isActive}
            $orientation={orientation}
            $size={size}
          >
            <StepCircleContainer $orientation={orientation} $size={size}>
              <StepCircle
                $isCompleted={isCompleted}
                $isActive={isActive}
                $size={size}
              >
                {(() => {
                  if (isCompleted) {
                    return (
                      <CheckIcon
                        label="completed step"
                        width={10}
                        height={10}
                      />
                    );
                  }

                  if (step.Icon) {
                    return <step.Icon />;
                  }

                  return (
                    <Text type={TextTypes.Body6} bold={isActive}>
                      {index + 1}
                    </Text>
                  );
                })()}
              </StepCircle>
              {index < steps.length - 1 && (
                <StepConnector
                  $isCompleted={isCompleted}
                  $orientation={orientation}
                  $size={size}
                />
              )}
            </StepCircleContainer>
            <StepContent $orientation={orientation}>
              <StepLabel
                $isCompleted={isCompleted}
                $isActive={isActive}
                $size={size}
                $hasDescription={!!step.description}
              >
                {step.label}
              </StepLabel>
              {step.description && (
                <StepDescription $size={size}>
                  {step.description}
                </StepDescription>
              )}
            </StepContent>
          </StepItem>
        );
      })}
    </StepperContainer>
  );
};

export default Stepper;
