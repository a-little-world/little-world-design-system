import React, { useCallback, useMemo, useRef, useState } from 'react';
import { Modal, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from 'styled-components/native';

import { TimePickerBaseProps } from '@a-little-world/little-world-design-system-core';
import InputError from '../InputError/InputError';
import Label from '../Label/Label';
import { ClockIcon } from '../Icon';
import { getTimePickerStyles } from './styles';

const CLOCK_ICON_SIZE = 18;

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

interface TimePickerProps extends TimePickerBaseProps {
  label?: string;
  id?: string;
}

const ITEM_HEIGHT = 44;

const TimePicker: React.FC<TimePickerProps> = ({
  cannotError,
  defaultValue,
  disabled,
  error,
  label,
  minuteStep = 5,
  onChange,
  placeholder = 'Select a time',
  use12Hour = false,
  value,
}) => {
  const theme = useTheme();
  const styles = useMemo(() => getTimePickerStyles({ theme }), [theme]);

  const isControlled = value !== undefined;
  const [internalTime, setInternalTime] = useState<string | undefined>(
    defaultValue,
  );
  const [isOpen, setIsOpen] = useState(false);

  const selectedTime = isControlled ? value : internalTime;
  const parsed = selectedTime ? parseTime(selectedTime) : null;

  const hour24 = parsed?.hours ?? 0;
  const minute = parsed?.minutes ?? 0;
  const isPM = hour24 >= 12;
  const displayHour12 = hour24 % 12 === 0 ? 12 : hour24 % 12;

  const hours24 = useMemo(() => Array.from({ length: 24 }, (_, i) => i), []);
  const hours12 = useMemo(
    () => Array.from({ length: 12 }, (_, i) => i + 1),
    [],
  );
  const minutes = useMemo(
    () =>
      Array.from(
        { length: Math.ceil(60 / minuteStep) },
        (_, i) => i * minuteStep,
      ),
    [minuteStep],
  );

  const hourScrollRef = useRef<ScrollView>(null);
  const minuteScrollRef = useRef<ScrollView>(null);

  const scrollToInitial = useCallback(() => {
    const hourIndex = use12Hour
      ? hours12.indexOf(displayHour12)
      : hours24.indexOf(hour24);
    const minuteIndex = minutes.indexOf(
      minutes.find(
        m => m <= minute && (minutes[minutes.indexOf(m) + 1] ?? 60) > minute,
      ) ?? 0,
    );
    hourScrollRef.current?.scrollTo({
      y: Math.max(0, hourIndex - 2) * ITEM_HEIGHT,
      animated: false,
    });
    minuteScrollRef.current?.scrollTo({
      y: Math.max(0, minuteIndex - 2) * ITEM_HEIGHT,
      animated: false,
    });
  }, [displayHour12, hour24, hours12, hours24, minute, minutes, use12Hour]);

  const commit = useCallback(
    (newHour24: number, newMinute: number) => {
      const timeString = `${padTwo(newHour24)}:${padTwo(newMinute)}`;
      if (!isControlled) setInternalTime(timeString);
      onChange?.(timeString);
    },
    [isControlled, onChange],
  );

  const handleHourPress = useCallback(
    (h: number) => {
      if (use12Hour) {
        const newHour24 = isPM ? (h === 12 ? 12 : h + 12) : h === 12 ? 0 : h;
        commit(newHour24, minute);
      } else {
        commit(h, minute);
      }
    },
    [commit, isPM, minute, use12Hour],
  );

  const handleMinutePress = useCallback(
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

  const displayHours = use12Hour ? hours12 : hours24;

  return (
    <View>
      {label ? <Label>{label}</Label> : null}
      <TouchableOpacity
        style={[
          styles.trigger,
          disabled && styles.triggerDisabled,
          Boolean(error) && styles.triggerError,
        ]}
        onPress={() => !disabled && setIsOpen(true)}
        disabled={disabled}
        accessibilityRole="button"
        accessibilityLabel={label ?? placeholder}
        accessibilityState={{ expanded: isOpen, disabled }}
      >
        <Text
          style={selectedTime ? styles.triggerText : styles.triggerPlaceholder}
        >
          {selectedTime ? formatDisplay(selectedTime, use12Hour) : placeholder}
        </Text>
        <ClockIcon
          label="open time picker"
          width={CLOCK_ICON_SIZE}
          height={CLOCK_ICON_SIZE}
        />
      </TouchableOpacity>
      {!cannotError && (
        <InputError visible={Boolean(error)}>{error}</InputError>
      )}

      <Modal
        visible={isOpen}
        transparent
        animationType="slide"
        onRequestClose={() => setIsOpen(false)}
        onShow={scrollToInitial}
      >
        <View style={styles.overlay}>
          <View style={styles.sheet}>
            <View style={styles.sheetHeader}>
              <Text style={styles.sheetTitle}>Select time</Text>
              <TouchableOpacity onPress={() => setIsOpen(false)}>
                <Text style={styles.doneButton}>Done</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.columnsContainer}>
              <ScrollView
                ref={hourScrollRef}
                style={styles.column}
                showsVerticalScrollIndicator={false}
              >
                {displayHours.map(h => {
                  const isSelected = use12Hour
                    ? h === displayHour12
                    : h === hour24;
                  return (
                    <TouchableOpacity
                      key={h}
                      style={[
                        styles.option,
                        isSelected && styles.optionSelected,
                      ]}
                      onPress={() => handleHourPress(h)}
                    >
                      <Text
                        style={
                          isSelected
                            ? styles.optionTextSelected
                            : styles.optionText
                        }
                      >
                        {use12Hour ? h : padTwo(h)}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>

              <Text style={styles.columnDivider}>:</Text>

              <ScrollView
                ref={minuteScrollRef}
                style={styles.column}
                showsVerticalScrollIndicator={false}
              >
                {minutes.map(m => {
                  const isSelected = m === minute;
                  return (
                    <TouchableOpacity
                      key={m}
                      style={[
                        styles.option,
                        isSelected && styles.optionSelected,
                      ]}
                      onPress={() => handleMinutePress(m)}
                    >
                      <Text
                        style={
                          isSelected
                            ? styles.optionTextSelected
                            : styles.optionText
                        }
                      >
                        {padTwo(m)}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>

              {use12Hour && (
                <View style={styles.ampmContainer}>
                  <TouchableOpacity
                    style={[
                      styles.ampmButton,
                      !isPM && styles.ampmButtonSelected,
                    ]}
                    onPress={() => handleAMPM(false)}
                  >
                    <Text
                      style={!isPM ? styles.ampmTextSelected : styles.ampmText}
                    >
                      AM
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[
                      styles.ampmButton,
                      isPM && styles.ampmButtonSelected,
                    ]}
                    onPress={() => handleAMPM(true)}
                  >
                    <Text
                      style={isPM ? styles.ampmTextSelected : styles.ampmText}
                    >
                      PM
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default TimePicker;
