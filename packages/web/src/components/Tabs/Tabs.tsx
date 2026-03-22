import * as RadixTabs from '@radix-ui/react-tabs';
import type {
  TabItem,
  TabsProps,
} from '@a-little-world/little-world-design-system-core';
import React from 'react';

import { StyledTabsList, StyledTabsTrigger, TabsContent } from './styles';

export { TabsContent };

const Tabs = ({
  ariaLabel,
  ariaLabelledBy,
  className,
  defaultValue,
  items,
  onValueChange,
  value,
}: TabsProps) => {
  const firstValue = items[0]?.value;
  const resolvedDefault =
    defaultValue ?? (value === undefined ? firstValue : undefined);

  return (
    <RadixTabs.Root
      className={className}
      defaultValue={value === undefined ? resolvedDefault : undefined}
      onValueChange={onValueChange}
      value={value}
    >
      <StyledTabsList aria-label={ariaLabel} aria-labelledby={ariaLabelledBy}>
        {items.map(({ value: tabValue, label }: TabItem) => (
          <StyledTabsTrigger key={tabValue} value={tabValue} type="button">
            {label}
          </StyledTabsTrigger>
        ))}
      </StyledTabsList>
      {items.map(({ value: tabValue, content }: TabItem) => (
        <TabsContent key={tabValue} value={tabValue}>
          {content}
        </TabsContent>
      ))}
    </RadixTabs.Root>
  );
};

export default Tabs;
