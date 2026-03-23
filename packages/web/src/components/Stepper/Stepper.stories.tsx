import React, { useMemo, useState } from 'react';

import Stepper from './Stepper';

type StepperProps = React.ComponentProps<typeof Stepper>;
type Step = StepperProps['steps'][number];

const steps: Step[] = [
  { id: 'step-1', label: 'Step 1', description: 'Welcome to the flow.' },
  { id: 'step-2', label: 'Step 2', description: 'Add a bit of progress.' },
  { id: 'step-3', label: 'Step 3', description: 'Almost there.' },
  { id: 'step-4', label: 'Step 4', description: 'You are done.' },
];

export default {
  component: Stepper,
  title: 'Components/Stepper',
  parameters: {
    layout: 'padded',
  },
};

export const Default = args => <Stepper {...args} />;
Default.args = {
  steps: steps,
  activeStepIndex: 1,
};

export const ClickableHorizontal = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(1);

  const idToIndex = useMemo(() => {
    const map: Record<string, number> = {};
    steps.forEach((s, i) => {
      map[s.id] = i;
    });
    return map;
  }, []);

  return (
    <div style={{ maxWidth: 520 }}>
      <Stepper
        orientation="horizontal"
        size="medium"
        steps={steps}
        activeStepIndex={activeStepIndex}
        onSelectStep={id => {
          const next = idToIndex[id];
          if (next === undefined) return;
          setActiveStepIndex(next);
        }}
      />
    </div>
  );
};

export const ClickableVertical = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(1);

  const idToIndex = useMemo(() => {
    const map: Record<string, number> = {};
    steps.forEach((s, i) => {
      map[s.id] = i;
    });
    return map;
  }, []);

  return (
    <div style={{ maxWidth: 520 }}>
      <Stepper
        orientation="vertical"
        size="medium"
        steps={steps}
        activeStepIndex={activeStepIndex}
        onSelectStep={id => {
          const next = idToIndex[id];
          if (next === undefined) return;
          setActiveStepIndex(next);
        }}
      />
    </div>
  );
};

export const NonClickableHorizontal = () => {
  return (
    <div style={{ maxWidth: 520 }}>
      <Stepper
        orientation="horizontal"
        size="medium"
        steps={steps}
        activeStepIndex={2}
      />
    </div>
  );
};

export const NonClickableVertical = () => {
  return (
    <div style={{ maxWidth: 520 }}>
      <Stepper
        orientation="vertical"
        size="medium"
        steps={steps}
        activeStepIndex={2}
      />
    </div>
  );
};
