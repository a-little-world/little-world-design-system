import React, {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from 'react';

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
  getFillLabelPlacement,
  markerOverlapsFillLabel,
  type FillLabelPlacement,
} from './fillLabel';
import {
  ProgressBarWrapper,
  ProgressIndicator,
  ProgressRoot,
  PROGRESS_MOTION_MS,
  ScaleEndLabel,
  ScaleFill,
  ScaleFillLabel,
  ScaleFillLabelText,
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
  /**
   * Scale variation only. Renders the current value and max inside the
   * track, e.g. "270 / 300 Min" when `endLabel` is "300 Min".
   * Below 60% of the track it sits just past the fill, in dark green.
   * From 60% it sits inside the fill, 16px (`spacing.small`) short
   * of the fill's leading edge, in white. It fades in after the bar
   * finishes moving (immediately with reduced motion). Ticks that cross
   * the label are hidden.
   * @default false
   */
  showValueInBar?: boolean;
}

const HAS_RESIZE_OBSERVER = typeof ResizeObserver !== 'undefined';

/** The label waits for the fill to finish moving, unless motion is off. */
const getFillMotionMs = () =>
  typeof window !== 'undefined' &&
  typeof window.matchMedia === 'function' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ? 0
    : PROGRESS_MOTION_MS;

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
  showValue = false,
  showValueInBar = false,
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
  const hasHeader = title != null || showValue || scoreRest != null;
  const hasScore = showValue || scoreRest != null;
  const trackRef = useRef<HTMLDivElement>(null);
  const fillLabelRef = useRef<HTMLSpanElement>(null);
  const [widths, setWidths] = useState({ track: 0, label: 0 });
  const [fillLabelVisible, setFillLabelVisible] = useState(false);
  // Empty until after the first paint, so the fill can transition in.
  const [fillInset, setFillInset] = useState(100);
  const maxLabel = endLabel ?? formatNumber(safeMax);
  const targetInset = 100 - percent;

  const measure = useCallback(() => {
    const track = trackRef.current;
    const fillLabel = fillLabelRef.current;
    if (!track || !fillLabel) {
      return;
    }

    const next = {
      track: Math.round(track.getBoundingClientRect().width),
      label: Math.round(fillLabel.getBoundingClientRect().width),
    };
    setWidths(prev =>
      prev.track === next.track && prev.label === next.label ? prev : next,
    );
  }, []);

  useEffect(() => {
    if (!showValueInBar) {
      return;
    }

    measure();

    const track = trackRef.current;
    const fillLabel = fillLabelRef.current;
    if (!HAS_RESIZE_OBSERVER || !track || !fillLabel) {
      return;
    }

    const observer = new ResizeObserver(measure);
    observer.observe(track);
    observer.observe(fillLabel);
    return () => observer.disconnect();
  }, [showValueInBar, measure]);

  // Without ResizeObserver, re-measure when the label text changes.
  useEffect(() => {
    if (showValueInBar && !HAS_RESIZE_OBSERVER) {
      measure();
    }
  }, [showValueInBar, measure, clamped, maxLabel]);

  const fillLabelPlacement: FillLabelPlacement | null =
    showValueInBar && widths.track > 0 && widths.label > 0
      ? getFillLabelPlacement(percent, widths.track, widths.label)
      : null;

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setFillInset(targetInset);
    });

    if (!showValueInBar) {
      return () => cancelAnimationFrame(frame);
    }

    setFillLabelVisible(false);
    const timeout = window.setTimeout(
      () => setFillLabelVisible(true),
      getFillMotionMs(),
    );

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(timeout);
    };
  }, [showValueInBar, targetInset]);

  return (
    <ScaleWrap className={className} $size={size}>
      {hasHeader ? (
        <ScaleHeader>
          {title != null ? <ScaleTitle>{title}</ScaleTitle> : null}
          {hasScore ? (
            <ScaleScore aria-hidden>
              {showValue ? (
                <ScaleScoreValue
                  type={
                    size === ProgressBarSizes.Small
                      ? TextTypes.Heading5
                      : TextTypes.Heading4
                  }
                >
                  {formatNumber(clamped)}
                </ScaleScoreValue>
              ) : null}
              {scoreRest != null ? (
                <ScaleScoreRest>{scoreRest}</ScaleScoreRest>
              ) : null}
            </ScaleScore>
          ) : null}
        </ScaleHeader>
      ) : null}
      <ScaleFrame
        value={clamped}
        max={rootMax}
        $size={size}
        aria-label={label}
        getValueLabel={ariaValueText ? () => ariaValueText : undefined}
      >
        <ScaleTrack ref={trackRef} data-scale-track="">
          <ScaleFill
            style={
              {
                '--lw-progress-fill-inset': `${fillInset}%`,
              } as React.CSSProperties
            }
          />
          {markers.map(marker => {
            // Ticks give way only once the label is showing, so the
            // track is never left without both while the fill moves.
            const hidden =
              fillLabelVisible &&
              fillLabelPlacement != null &&
              markerOverlapsFillLabel(
                marker.percent,
                fillLabelPlacement,
                widths.track,
              );

            return (
              <ScaleMarker
                key={marker.value}
                data-marker={marker.value}
                $percent={marker.percent}
                $covered={marker.value <= clamped}
                hidden={hidden || undefined}
                aria-hidden
              />
            );
          })}
          {showValueInBar ? (
            <ScaleFillLabel
              ref={fillLabelRef}
              data-testid="progress-fill-label"
              data-fill-label=""
              aria-hidden
              $onFill={Boolean(fillLabelPlacement?.onFill)}
              $visible={fillLabelVisible}
              style={{ left: fillLabelPlacement?.startPx ?? 0 }}
            >
              <ScaleFillLabelText
                bold
                tag="span"
                disableParser
                type={TextTypes.Heading5}
              >
                {formatNumber(clamped)}
              </ScaleFillLabelText>
              <ScaleFillLabelText
                bold
                tag="span"
                disableParser
                type={TextTypes.Heading7}
              >
                {'/ '}
                {maxLabel}
              </ScaleFillLabelText>
            </ScaleFillLabel>
          ) : null}
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
