import React, { useState } from 'react';
import { Text, View } from 'react-native';

import { TimePicker } from '@a-little-world/little-world-design-system-native';

export default {
  component: TimePicker,
  title: 'Components/TimePicker',
};

export const Default = () => (
  <TimePicker label="Appointment time" />
);

export const TwelveHour = () => (
  <TimePicker label="Start time" use12Hour />
);

export const WithDefaultValue = () => (
  <TimePicker label="Meeting time" defaultValue="09:30" />
);

export const WithMinuteStep = () => (
  <TimePicker label="Duration start" minuteStep={15} defaultValue="10:00" />
);

export const WithError = () => (
  <TimePicker
    label="Closing time"
    error="Please select a valid time"
  />
);

export const Disabled = () => (
  <TimePicker label="Unavailable time" defaultValue="14:00" disabled />
);

export const Controlled = () => {
  const [time, setTime] = useState<string | undefined>('08:00');
  return (
    <View style={{ gap: 12 }}>
      <TimePicker
        label="Wake-up time"
        value={time}
        onChange={setTime}
        use12Hour
      />
      <Text style={{ fontSize: 14 }}>
        Selected (24h): <Text style={{ fontWeight: 'bold' }}>{time ?? '—'}</Text>
      </Text>
    </View>
  );
};
