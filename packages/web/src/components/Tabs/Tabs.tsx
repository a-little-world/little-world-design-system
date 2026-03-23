import type {
  TabItem,
  TabsProps,
} from '@a-little-world/little-world-design-system-core';
import { TabsVariations } from '@a-little-world/little-world-design-system-core';
import React from 'react';

import {
  StyledTabsList,
  StyledTabsRoot,
  StyledTabsTrigger,
  TabsContent,
} from './styles';

export { TabsContent, TabsVariations };

const Tabs = ({
  ariaLabel,
  ariaLabelledBy,
  activeColor,
  className,
  defaultValue,
  items,
  onValueChange,
  value,
  variation = TabsVariations.Underline,
}: TabsProps) => {
  const firstValue = items[0]?.value;
  const resolvedDefault =
    defaultValue ?? (value === undefined ? firstValue : undefined);

  return (
    <StyledTabsRoot
      $variation={variation}
      className={className}
      defaultValue={value === undefined ? resolvedDefault : undefined}
      onValueChange={onValueChange}
      value={value}
    >
      <StyledTabsList
        $variation={variation}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
      >
        {items.map(({ value: tabValue, label }: TabItem) => (
          <StyledTabsTrigger
            key={tabValue}
            $activeColor={activeColor}
            $variation={variation}
            value={tabValue}
            type="button"
          >
            {label}
          </StyledTabsTrigger>
        ))}
      </StyledTabsList>
      {items.map(({ value: tabValue, content }: TabItem) => (
        <TabsContent key={tabValue} $variation={variation} value={tabValue}>
          {content}
        </TabsContent>
      ))}
    </StyledTabsRoot>
  );
};

export default Tabs;
