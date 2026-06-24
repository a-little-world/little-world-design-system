import * as RadixPopover from '@radix-ui/react-popover';
import React, { useCallback, useState } from 'react';

import {
  DatePickerBaseProps,
  InputHeight,
  InputWidth,
} from '@a-little-world/little-world-design-system-core';
import FieldError from '../FieldError/FieldError';
import Label from '../Label/Label';
import { CalendarIcon, ChevronLeftIcon, ChevronRightIcon } from '../Icon';
import {
  CalendarDay,
  CalendarDayLabel,
  CalendarGrid,
  CalendarHeader,
  CalendarMonthYear,
  CalendarNavButton,
  CalendarPopoverContent,
  DatePickerTrigger,
  DatePickerWrapper,
  TriggerIconWrapper,
} from './styles';

export { InputWidth, InputHeight };

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const DAY_LABELS = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

const CALENDAR_ICON_SIZE = 16;
const NAV_ICON_SIZE = 14;

function startOfDay(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function isSameDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function isDateDisabled(
  date: Date,
  minDate?: Date,
  maxDate?: Date,
  disabledDates?: Date[],
): boolean {
  const d = startOfDay(date);
  if (minDate && d < startOfDay(minDate)) return true;
  if (maxDate && d > startOfDay(maxDate)) return true;
  if (disabledDates?.some(dd => isSameDay(d, dd))) return true;
  return false;
}

function getCalendarDays(year: number, month: number): Date[] {
  const firstDay = new Date(year, month, 1);
  const leadingDays = (firstDay.getDay() + 6) % 7; // Monday = 0
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const totalCells = Math.ceil((leadingDays + daysInMonth) / 7) * 7;

  const days: Date[] = [];
  for (let i = 0; i < totalCells; i++) {
    days.push(new Date(year, month, i - leadingDays + 1));
  }
  return days;
}

function formatDate(date: Date): string {
  const d = date.getDate().toString().padStart(2, '0');
  const m = (date.getMonth() + 1).toString().padStart(2, '0');
  const y = date.getFullYear();
  return `${d}/${m}/${y}`;
}

type DatePickerCoreProps = DatePickerBaseProps;

export type DatePickerProps =
  | (DatePickerCoreProps & { label?: undefined; id?: string })
  | (DatePickerCoreProps & { label: string; id: string });

const DatePicker: React.FC<DatePickerProps> = ({
  cannotError,
  defaultValue,
  disabled,
  disabledDates,
  error,
  height,
  id,
  inModal,
  label,
  labelTooltip,
  maxDate,
  minDate,
  onChange,
  placeholder = 'Select a date',
  value,
  width = InputWidth.Large,
}) => {
  const isControlled = value !== undefined;
  const [internalDate, setInternalDate] = useState<Date | undefined>(
    defaultValue,
  );
  const [isOpen, setIsOpen] = useState(false);
  const activeError =
    Boolean(error) && !(isControlled ? false : Boolean(internalDate));

  const selectedDate = isControlled ? value : internalDate;

  const today = startOfDay(new Date());
  const [viewYear, setViewYear] = useState(
    selectedDate?.getFullYear() ?? today.getFullYear(),
  );
  const [viewMonth, setViewMonth] = useState(
    selectedDate?.getMonth() ?? today.getMonth(),
  );

  const calendarDays = getCalendarDays(viewYear, viewMonth);

  const handleDayClick = useCallback(
    (date: Date) => {
      if (!isControlled) {
        setInternalDate(date);
      }
      onChange?.(date);
      setIsOpen(false);
    },
    [isControlled, onChange],
  );

  const handlePrevMonth = () => {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear(y => y - 1);
    } else {
      setViewMonth(m => m - 1);
    }
  };

  const handleNextMonth = () => {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear(y => y + 1);
    } else {
      setViewMonth(m => m + 1);
    }
  };

  // Disable nav if the entire prev/next month is outside the valid range
  const prevMonthDisabled = minDate
    ? startOfDay(new Date(viewYear, viewMonth, 0)) < startOfDay(minDate)
    : false;
  const nextMonthDisabled = maxDate
    ? startOfDay(new Date(viewYear, viewMonth + 1, 1)) > startOfDay(maxDate)
    : false;

  const calendar = (
    <CalendarPopoverContent
      sideOffset={4}
      align="start"
      collisionPadding={8}
      onOpenAutoFocus={inModal ? e => e.preventDefault() : undefined}
    >
      <CalendarHeader>
        <CalendarNavButton
          type="button"
          onClick={handlePrevMonth}
          disabled={prevMonthDisabled}
          aria-label="Previous month"
        >
          <ChevronLeftIcon
            label=""
            width={NAV_ICON_SIZE}
            height={NAV_ICON_SIZE}
          />
        </CalendarNavButton>
        <CalendarMonthYear>
          {MONTHS[viewMonth]} {viewYear}
        </CalendarMonthYear>
        <CalendarNavButton
          type="button"
          onClick={handleNextMonth}
          disabled={nextMonthDisabled}
          aria-label="Next month"
        >
          <ChevronRightIcon
            label=""
            width={NAV_ICON_SIZE}
            height={NAV_ICON_SIZE}
          />
        </CalendarNavButton>
      </CalendarHeader>

      <CalendarGrid role="grid" aria-label={`${MONTHS[viewMonth]} ${viewYear}`}>
        {DAY_LABELS.map(day => (
          <CalendarDayLabel key={day} role="columnheader" aria-label={day}>
            {day}
          </CalendarDayLabel>
        ))}
        {calendarDays.map((date, index) => {
          const isCurrentMonth = date.getMonth() === viewMonth;
          const isSelected = selectedDate
            ? isSameDay(date, selectedDate)
            : false;
          const isToday = isSameDay(date, today);
          const isDayDisabled = isDateDisabled(
            date,
            minDate,
            maxDate,
            disabledDates,
          );

          return (
            <CalendarDay
              key={index}
              role="gridcell"
              type="button"
              $isCurrentMonth={isCurrentMonth}
              $isSelected={isSelected}
              $isToday={isToday}
              $isDisabled={isDayDisabled}
              onClick={() => handleDayClick(date)}
              aria-label={formatDate(date)}
              aria-pressed={isSelected}
              aria-disabled={isDayDisabled}
              tabIndex={isDayDisabled ? -1 : 0}
            >
              {date.getDate()}
            </CalendarDay>
          );
        })}
      </CalendarGrid>
    </CalendarPopoverContent>
  );

  return (
    <DatePickerWrapper $width={width}>
      {label && (
        <Label bold htmlFor={id} tooltipText={labelTooltip}>
          {label}
        </Label>
      )}
      <RadixPopover.Root
        open={isOpen}
        onOpenChange={disabled ? undefined : setIsOpen}
      >
        <RadixPopover.Trigger asChild>
          <DatePickerTrigger
            id={id}
            type="button"
            $hasError={activeError}
            $height={height}
            $disabled={disabled}
            $hasValue={Boolean(selectedDate)}
            disabled={disabled}
            aria-haspopup="dialog"
            aria-expanded={isOpen}
          >
            <span>{selectedDate ? formatDate(selectedDate) : placeholder}</span>
            <TriggerIconWrapper>
              <CalendarIcon
                label="open calendar"
                width={CALENDAR_ICON_SIZE}
                height={CALENDAR_ICON_SIZE}
              />
            </TriggerIconWrapper>
          </DatePickerTrigger>
        </RadixPopover.Trigger>
        {inModal ? (
          calendar
        ) : (
          <RadixPopover.Portal>{calendar}</RadixPopover.Portal>
        )}
      </RadixPopover.Root>
      {!cannotError && activeError && <FieldError text={error} />}
    </DatePickerWrapper>
  );
};

export default DatePicker;
