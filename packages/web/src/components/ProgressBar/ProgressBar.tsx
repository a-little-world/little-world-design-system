import React, { ReactNode, useEffect, useState } from 'react';

import {
  ProgressBarSizes,
  ProgressBarVariations,
  TextTypes,
  calculateProgress,
  getMarkers,
  getScaleLabelBands,
  type ProgressBarSize,
  type ProgressBarVariation,
} from '@a-little-world/little-world-design-system-core';

import Text from '../Text/Text';
import {
  ProgressBarWrapper,
  ProgressIndicator,
  ProgressRoot,
  ScaleEndLabel,
  ScaleFill,
  ScaleFrame,
  ScaleGradient,
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

export interface ProgressBarProps {
  className?: string;
  customLabel?: string;
  fullWidth?: boolean;
  hideLabel?: boolean;
  max: number;
  value?: number;
  variation?: ProgressBarVariation;
  /**
   * Bar thickness. Heights differ by variation:
   * basic `small` 8px / `large` 16px (default `small`);
   * scale `small` 32px / `large` 48px (default `large`).
   */
  size?: ProgressBarSize;
  /**
   * Marker interval for the scale variation.
   * @default 30
   */
  step?: number;
  /**
   * Show the number row under the scale bar.
   * @default true
   */
  showScale?: boolean;
  /** Accessible name. Required when `variation` is `scale`. */
  label?: string;
  /** Optional heading on the left of the scale header. */
  title?: ReactNode;
  /**
   * Smaller copy after the large current value, e.g. "von 300 Minuten".
   * The current value is rendered by the component; pass units and
   * translation here. The header shows when `title` and/or `scoreRest`
   * is set.
   */
  scoreRest?: ReactNode;
  /** Right-side label (e.g. "300 Min"). Defaults to the formatted max. */
  endLabel?: ReactNode;
  /** Spoken value override for the scale variation. */
  ariaValueText?: string;
}

const formatNumber = (value: number) => new Intl.NumberFormat().format(value);

const BasicProgressBar: React.FC<ProgressBarProps> = ({
  className,
  customLabel,
  fullWidth,
  hideLabel,
  max,
  size = ProgressBarSizes.Small,
  value = 0,
}) => {
  const [progress, setProgress] = useState(calculateProgress(max, value));

  useEffect(() => {
    setProgress(calculateProgress(max, value));
  }, [max, value]);

  return (
    <ProgressBarWrapper className={className} $fullWidth={fullWidth}>
      {!fullWidth && !hideLabel && (
        <Text id="progressBarIndicator" tag="span" type={TextTypes.Body6}>
          {customLabel || `${value}/${max}`}
        </Text>
      )}
      <ProgressRoot
        aria-labelledby="progressBarIndicator"
        value={value}
        max={max}
        $fullWidth={fullWidth}
        $size={size}
      >
        <ProgressIndicator
          className="ProgressIndicator"
          style={{ transform: `translateX(-${100 - progress}%)` }}
        />
      </ProgressRoot>
      {fullWidth && hideLabel && (
        <Text id="progressBarIndicator" tag="span" type={TextTypes.Body6}>
          {customLabel || `${value}/${max}`}
        </Text>
      )}
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
  const safeMax = max > 0 ? max : 0;
  const clamped = Math.min(Math.max(value, 0), safeMax);
  const percent = safeMax > 0 ? (clamped / safeMax) * 100 : 0;
  const markers = getMarkers(safeMax, step);
  const rootMax = safeMax > 0 ? safeMax : 1;
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
          {clamped > 0 && safeMax > 0 ? (
            <ScaleFill style={{ width: `${percent}%` }}>
              <ScaleGradient
                style={{ width: `${(safeMax / clamped) * 100}%` }}
              />
            </ScaleFill>
          ) : null}
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
            const bands = getScaleLabelBands(marker.value, safeMax, step);
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
