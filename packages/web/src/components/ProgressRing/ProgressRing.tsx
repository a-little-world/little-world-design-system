import React from 'react';
import { useTheme } from 'styled-components';
import {
  ProgressRingAppearances,
  ProgressRingBaseProps,
  ProgressRingSize,
  ProgressRingSizes,
  ProgressRingStrokeWidths,
  ProgressRingTones,
  TextTypes,
} from '@a-little-world/little-world-design-system-core';

import {
  Caption,
  Fraction,
  FractionRest,
  FractionValue,
  InnerContent,
  RingWrap,
  Svg,
} from './ProgressRing.styles';

export { ProgressRingAppearances, ProgressRingSizes, ProgressRingTones };

export interface ProgressRingProps extends ProgressRingBaseProps {
  className?: string;
  children?: React.ReactNode;
}

const VIEW_BOX = 100;
const VIEW_CENTER = VIEW_BOX / 2;

const LABEL_CONTENT_SIZES: ProgressRingSize[] = [
  ProgressRingSizes.Medium,
  ProgressRingSizes.Large,
  ProgressRingSizes.XLarge,
];

const getLabelTextTypes = (size: ProgressRingSize) => {
  switch (size) {
    case ProgressRingSizes.XLarge:
      return {
        value: TextTypes.Body2,
        rest: TextTypes.Body4,
        caption: TextTypes.Body5,
      };
    case ProgressRingSizes.Large:
      return {
        value: TextTypes.Body3,
        rest: TextTypes.Body5,
        caption: TextTypes.Body5,
      };
    default:
      return {
        value: TextTypes.Body5,
        rest: TextTypes.Body6,
        caption: TextTypes.Body6,
      };
  }
};

const ProgressRing: React.FC<ProgressRingProps> = ({
  value = 0,
  max = 1,
  label,
  size = ProgressRingSizes.Large,
  tone = ProgressRingTones.Accent,
  appearance = ProgressRingAppearances.Default,
  caption,
  className,
  children,
}) => {
  const theme = useTheme();
  const isProgress = appearance === ProgressRingAppearances.Default;
  const isComplete = appearance === ProgressRingAppearances.Complete;
  const showRing = isProgress || isComplete;

  const safeMax = max > 0 ? max : 1;
  const clamped = Math.min(Math.max(value, 0), safeMax);
  const progress = isComplete ? 1 : clamped / safeMax;

  const { stroke } = ProgressRingStrokeWidths[size];
  const radius = (VIEW_BOX - stroke) / 2;
  // Inner edge of the (centered) stroke, with a slight overlap to avoid
  // antialias hairlines between fill and stroke
  const innerRadius = VIEW_CENTER - stroke + 0.35;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference * (1 - progress);

  const trackColor = theme.color.border.subtle;
  const progressColor =
    tone === ProgressRingTones.Success
      ? theme.color.border.success
      : theme.color.border.selected;

  const strokeColor = isComplete ? theme.color.border.selected : progressColor;
  const discColor = isComplete
    ? theme.color.surface.accent
    : theme.color.surface.primary;

  const showLabelContent = isProgress && LABEL_CONTENT_SIZES.includes(size);
  const textTypes = getLabelTextTypes(size);

  return (
    <RingWrap
      className={className}
      $size={size}
      $appearance={appearance}
      role={isProgress ? 'progressbar' : 'img'}
      aria-label={label}
      aria-valuemin={isProgress ? 0 : undefined}
      aria-valuemax={isProgress ? safeMax : undefined}
      aria-valuenow={isProgress ? clamped : undefined}
    >
      {showRing ? (
        <Svg viewBox={`0 0 ${VIEW_BOX} ${VIEW_BOX}`} aria-hidden>
          <circle
            cx={VIEW_CENTER}
            cy={VIEW_CENTER}
            r={innerRadius}
            fill={discColor}
          />
          {isProgress ? (
            <circle
              cx={VIEW_CENTER}
              cy={VIEW_CENTER}
              r={radius}
              fill="none"
              stroke={trackColor}
              strokeWidth={stroke}
            />
          ) : null}
          <circle
            cx={VIEW_CENTER}
            cy={VIEW_CENTER}
            r={radius}
            fill="none"
            stroke={strokeColor}
            strokeWidth={stroke}
            strokeLinecap="butt"
            strokeDasharray={circumference}
            strokeDashoffset={dashOffset}
          />
        </Svg>
      ) : null}
      <InnerContent $stroke={stroke} $appearance={appearance}>
        {children ??
          (showLabelContent ? (
            <>
              <Fraction>
                <FractionValue type={textTypes.value}>{clamped}</FractionValue>
                <FractionRest type={textTypes.rest}>/</FractionRest>
                <FractionRest type={textTypes.rest}>{safeMax}</FractionRest>
              </Fraction>
              {caption ? (
                <Caption type={textTypes.caption}>{caption}</Caption>
              ) : null}
            </>
          ) : null)}
      </InnerContent>
    </RingWrap>
  );
};

export default ProgressRing;
