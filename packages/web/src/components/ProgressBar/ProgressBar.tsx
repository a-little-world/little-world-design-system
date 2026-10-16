import React, { useId, useMemo } from 'react';

import {
  ProgressBarSizes,
  ProgressBarVariations,
  TextTypes,
  calculateProgress,
  getMarkers,
  getScaleLabelBands,
  getScaleLabelSteps,
  type ProgressBarScaleProps,
  type ProgressBarVariationProps,
} from '@a-little-world/little-world-design-system-core';

import Text from '../Text/Text';
import {
  ProgressBarWrapper,
  ProgressIndicator,
  ProgressRoot,
  ScaleEndLabel,
  ScaleFill,
  ScaleFrame,
  ScaleHeader,
  ScaleMarker,
  ScaleRow,
  ScaleScore,
  ScaleScoreRest,
  ScaleScoreValue,
  ScaleStartLabel,
  ScaleTickLabel,
  ScaleTitle,
  ScaleTrack,
  ScaleWrap,
} from './ProgressBar.styles';

export { ProgressBarSizes, ProgressBarVariations };

export interface ProgressBarProps
  extends ProgressBarVariationProps,
    ProgressBarScaleProps {
  className?: string;
  customLabel?: string;
  fullWidth?: boolean;
  hideLabel?: boolean;
}

const numberFormat = new Intl.NumberFormat();
const formatNumber = (value: number) => numberFormat.format(value);

/** Radix Progress needs max > 0 and 0 <= value <= max. */
const getSafeRange = (max: number, value: number) => {
  const safeMax = max > 0 ? max : 0;
  return {
    safeMax,
    clamped: Math.min(Math.max(value, 0), safeMax),
    rootMax: safeMax > 0 ? safeMax : 1,
  };
};

const BasicProgressBar: React.FC<ProgressBarProps> = ({
  className,
  customLabel,
  fullWidth,
  hideLabel,
  label,
  max,
  size = ProgressBarSizes.Small,
  value = 0,
}) => {
  const labelId = useId();
  const { safeMax, clamped, rootMax } = getSafeRange(max, value);
  const progress = calculateProgress(safeMax, clamped);
  const labelText = customLabel || `${clamped}/${safeMax}`;
  const showLeadingLabel = !fullWidth && !hideLabel;
  const showTrailingLabel = fullWidth && hideLabel;
  const hasVisibleLabel = showLeadingLabel || showTrailingLabel;
  const visibleLabel = (
    <Text id={labelId} tag="span" type={TextTypes.Body6}>
      {labelText}
    </Text>
  );

  return (
    <ProgressBarWrapper className={className} $fullWidth={fullWidth}>
      {showLeadingLabel && visibleLabel}
      <ProgressRoot
        aria-label={label ?? (hasVisibleLabel ? undefined : labelText)}
        aria-labelledby={!label && hasVisibleLabel ? labelId : undefined}
        value={clamped}
        max={rootMax}
        $fullWidth={fullWidth}
        $size={size}
      >
        <ProgressIndicator
          className="ProgressIndicator"
          style={{ transform: `translateX(-${100 - progress}%)` }}
        />
      </ProgressRoot>
      {showTrailingLabel && visibleLabel}
    </ProgressBarWrapper>
  );
};

const ScaleProgressBar: React.FC<ProgressBarProps> = ({
  ariaValueText,
  className,
  endLabel,
  label,
  max,
  scoreRest,
  showScale = true,
  size = ProgressBarSizes.Large,
  step = 30,
  title,
  value = 0,
}) => {
  const { safeMax, clamped, rootMax } = getSafeRange(max, value);
  const percent = calculateProgress(safeMax, clamped);
  const markers = useMemo(() => getMarkers(safeMax, step), [safeMax, step]);
  const labelSteps = useMemo(
    () => getScaleLabelSteps(safeMax, step),
    [safeMax, step],
  );
  const showHeader = title != null || scoreRest != null;

  return (
    <ScaleWrap className={className}>
      {showHeader ? (
        <ScaleHeader>
          {title != null ? <ScaleTitle>{title}</ScaleTitle> : null}
          <ScaleScore aria-hidden>
            <ScaleScoreValue>{formatNumber(clamped)}</ScaleScoreValue>
            {scoreRest != null ? (
              <ScaleScoreRest>{scoreRest}</ScaleScoreRest>
            ) : null}
          </ScaleScore>
        </ScaleHeader>
      ) : null}
      <ScaleFrame
        value={clamped}
        max={rootMax}
        $size={size}
        aria-label={label}
        getValueLabel={ariaValueText ? () => ariaValueText : undefined}
      >
        <ScaleTrack>
          <ScaleFill
            style={
              {
                '--lw-progress-fill-inset': `${100 - percent}%`,
              } as React.CSSProperties
            }
          />
          {markers.map(marker => (
            <ScaleMarker
              key={marker.value}
              $percent={marker.percent}
              $covered={marker.value <= clamped}
              aria-hidden
            />
          ))}
        </ScaleTrack>
      </ScaleFrame>
      {showScale ? (
        <ScaleRow aria-hidden>
          <ScaleStartLabel>{formatNumber(0)}</ScaleStartLabel>
          {markers.map(marker => {
            const bands = getScaleLabelBands(marker.value, safeMax, labelSteps);
            return (
              <ScaleTickLabel
                key={marker.value}
                $percent={marker.percent}
                $base={bands.base}
                $small={bands.small}
                $medium={bands.medium}
              >
                {formatNumber(marker.value)}
              </ScaleTickLabel>
            );
          })}
          <ScaleEndLabel>{endLabel ?? formatNumber(safeMax)}</ScaleEndLabel>
        </ScaleRow>
      ) : null}
    </ScaleWrap>
  );
};

const ProgressBar: React.FC<ProgressBarProps> = ({
  variation = ProgressBarVariations.Basic,
  ...props
}) => {
  if (variation === ProgressBarVariations.Scale) {
    return <ScaleProgressBar {...props} variation={variation} />;
  }

  return <BasicProgressBar {...props} variation={variation} />;
};

export default ProgressBar;
