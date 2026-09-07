import * as RadixPopover from '@radix-ui/react-popover';
import React, { useCallback, useEffect, useRef, useState } from 'react';

import {
  InputHeight,
  InputWidth,
  TimePickerBaseProps,
} from '@a-little-world/little-world-design-system-core';
import InputError from '../InputError/InputError';
import Label from '../Label/Label';
import { ClockIcon } from '../Icon';
import {
  AMPMButton,
  AMPMContainer,
  ColumnDivider,
  TimeColumn,
  TimeColumnsContainer,
  TimeOption,
  TimePickerPopoverContent,
  TimePickerTrigger,
  TimePickerWrapper,
  TriggerIconWrapper,
} from './styles';

export { InputWidth, InputHeight };

const CLOCK_ICON_SIZE = 16;

function padTwo(n: number): string {
  return String(n).padStart(2, '0');
}

function parseTime(time: string): { hours: number; minutes: number } | null {
  const match = time.match(/^(\d{1,2}):(\d{2})$/);
  if (!match) return null;
  const hours = parseInt(match[1], 10);
  const minutes = parseInt(match[2], 10);
  if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59) return null;
  return { hours, minutes };
}

function formatDisplay(time: string, use12Hour: boolean): string {
  const parsed = parseTime(time);
  if (!parsed) return time;
  const { hours, minutes } = parsed;
  if (use12Hour) {
    const period = hours < 12 ? 'AM' : 'PM';
    const displayHour = hours % 12 === 0 ? 12 : hours % 12;
    return `${displayHour}:${padTwo(minutes)} ${period}`;
  }
  return `${padTwo(hours)}:${padTwo(minutes)}`;
}

type TimePickerCoreProps = TimePickerBaseProps;

export type TimePickerProps =
  | (TimePickerCoreProps & { label?: undefined; id?: string })
  | (TimePickerCoreProps & { label: string; id: string });

const TimePicker: React.FC<TimePickerProps> = ({
  cannotError,
  defaultValue,
  disabled,
  error,
  height,
  id,
  inModal,
  label,
  labelTooltip,
  minuteStep = 5,
  onChange,
  placeholder = 'Select a time',
  required,
  use12Hour = false,
  value,
  width = InputWidth.Large,
}) => {
  const isControlled = value !== undefined;
  const [internalTime, setInternalTime] = useState<string | undefined>(
    defaultValue,
  );
  const [isOpen, setIsOpen] = useState(false);
  const [displayError, setDisplayError] = useState(error);

  useEffect(() => {
    setDisplayError(error);
  }, [error]);

  const selectedTime = isControlled ? value : internalTime;
  const parsed = selectedTime ? parseTime(selectedTime) : null;

  const hour24 = parsed?.hours ?? 0;
  const minute = parsed?.minutes ?? 0;
  const isPM = hour24 >= 12;
  const displayHour12 = hour24 % 12 === 0 ? 12 : hour24 % 12;

  const hourRef = useRef<HTMLDivElement>(null);
  const minuteRef = useRef<HTMLDivElement>(null);

  const hours24 = Array.from({ length: 24 }, (_, i) => i);
  const hours12 = Array.from({ length: 12 }, (_, i) => i + 1);
  const minutes = Array.from(
    { length: Math.ceil(60 / minuteStep) },
    (_, i) => i * minuteStep,
  );

  const scrollToSelected = useCallback(() => {
    [hourRef, minuteRef].forEach((ref) => {
      const el = ref.current?.querySelector<HTMLElement>(
        '[data-selected="true"]',
      );
      el?.scrollIntoView({ block: 'center', behavior: 'instant' });
    });
  }, []);

  useEffect(() => {
    if (isOpen) {
      const id = setTimeout(scrollToSelected, 30);
      return () => clearTimeout(id);
    }
  }, [isOpen, scrollToSelected]);

  const commit = useCallback(
    (newHour24: number, newMinute: number) => {
      const timeString = `${padTwo(newHour24)}:${padTwo(newMinute)}`;
      if (!isControlled) setInternalTime(timeString);
      onChange?.(timeString);
      setDisplayError(undefined);
    },
    [isControlled, onChange],
  );

  const handleHourClick = useCallback(
    (h: number) => {
      if (use12Hour) {
        let newHour24: number;
        if (isPM) {
          newHour24 = h === 12 ? 12 : h + 12;
        } else {
          newHour24 = h === 12 ? 0 : h;
        }
        commit(newHour24, minute);
      } else {
        commit(h, minute);
      }
    },
    [commit, isPM, minute, use12Hour],
  );

  const handleMinuteClick = useCallback(
    (m: number) => {
      commit(hour24, m);
    },
    [commit, hour24],
  );

  const handleAMPM = useCallback(
    (pm: boolean) => {
      const newHour24 = pm ? (hour24 % 12) + 12 : hour24 % 12;
      commit(newHour24, minute);
    },
    [commit, hour24, minute],
  );

  const picker = (
    <TimePickerPopoverContent
      side="bottom"
      align="start"
      sideOffset={4}
      onOpenAutoFocus={(e) => e.preventDefault()}
    >
      <TimeColumnsContainer>
        <TimeColumn ref={hourRef} role="listbox" aria-label="Hours">
          {(use12Hour ? hours12 : hours24).map((h) => {
            const isSelected = use12Hour ? h === displayHour12 : h === hour24;
            return (
              <TimeOption
                key={h}
                $isSelected={isSelected}
                data-selected={isSelected || undefined}
                role="option"
                aria-selected={isSelected}
                onClick={() => handleHourClick(h)}
              >
                {use12Hour ? h : padTwo(h)}
              </TimeOption>
            );
          })}
        </TimeColumn>
        <ColumnDivider>:</ColumnDivider>
        <TimeColumn ref={minuteRef} role="listbox" aria-label="Minutes">
          {minutes.map((m) => {
            const isSelected = m === minute;
            return (
              <TimeOption
                key={m}
                $isSelected={isSelected}
                data-selected={isSelected || undefined}
                role="option"
                aria-selected={isSelected}
                onClick={() => handleMinuteClick(m)}
              >
                {padTwo(m)}
              </TimeOption>
            );
          })}
        </TimeColumn>
        {use12Hour && (
          <AMPMContainer>
            <AMPMButton $isSelected={!isPM} onClick={() => handleAMPM(false)}>
              AM
            </AMPMButton>
            <AMPMButton $isSelected={isPM} onClick={() => handleAMPM(true)}>
              PM
            </AMPMButton>
          </AMPMContainer>
        )}
      </TimeColumnsContainer>
    </TimePickerPopoverContent>
  );

  return (
    <TimePickerWrapper $width={width}>
      {label && (
        <Label bold htmlFor={id} tooltipText={labelTooltip} required={required}>
          {label}
        </Label>
      )}
      <input
        type="text"
        required={required}
        value={selectedTime ?? ''}
        readOnly
        tabIndex={-1}
        aria-hidden="true"
        style={{
          display: 'block',
          width: 0,
          height: 0,
          padding: 0,
          border: 0,
          overflow: 'hidden',
        }}
      />
      <RadixPopover.Root
        open={isOpen}
        onOpenChange={disabled ? undefined : setIsOpen}
      >
        <RadixPopover.Trigger asChild>
          <TimePickerTrigger
            id={id}
            type="button"
            $hasError={Boolean(displayError)}
            $height={height}
            $disabled={disabled}
            $hasValue={Boolean(selectedTime)}
            disabled={disabled}
            aria-haspopup="listbox"
            aria-expanded={isOpen}
            aria-required={required || undefined}
            aria-invalid={Boolean(displayError) || undefined}
            aria-describedby={displayError && id ? `${id}-error` : undefined}
          >
            <span>
              {selectedTime ? formatDisplay(selectedTime, use12Hour) : placeholder}
            </span>
            <TriggerIconWrapper>
              <ClockIcon
                label="open time picker"
                width={CLOCK_ICON_SIZE}
                height={CLOCK_ICON_SIZE}
              />
            </TriggerIconWrapper>
          </TimePickerTrigger>
        </RadixPopover.Trigger>
        {inModal ? picker : <RadixPopover.Portal>{picker}</RadixPopover.Portal>}
      </RadixPopover.Root>
      {!cannotError && (
        <InputError
          id={id ? `${id}-error` : undefined}
          visible={Boolean(displayError)}
        >
          {displayError}
        </InputError>
      )}
    </TimePickerWrapper>
  );
};

export default TimePicker;
