import React, { useState } from 'react';

import TimePicker from './TimePicker';

export default {
  component: TimePicker,
  title: 'Components/TimePicker',
};

export const Default = () => (
  <TimePicker label="Appointment time" id="appointment-time" />
);

export const TwelveHour = () => (
  <TimePicker label="Start time" id="start-time" use12Hour />
);

export const WithDefaultValue = () => (
  <TimePicker
    label="Meeting time"
    id="meeting-time"
    defaultValue="09:30"
  />
);

export const WithMinuteStep = () => (
  <TimePicker
    label="Duration start"
    id="duration-start"
    minuteStep={15}
    defaultValue="10:00"
  />
);

export const WithError = () => (
  <TimePicker
    label="Closing time"
    id="closing-time"
    error="Please select a valid time"
  />
);

export const Disabled = () => (
  <TimePicker
    label="Unavailable time"
    id="unavailable-time"
    defaultValue="14:00"
    disabled
  />
);

export const Controlled = () => {
  const [time, setTime] = useState<string | undefined>('08:00');
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <TimePicker
        label="Wake-up time"
        id="wake-up-time"
        value={time}
        onChange={setTime}
        use12Hour
      />
      <p style={{ margin: 0, fontSize: 14 }}>
        Selected (24h): <strong>{time ?? '—'}</strong>
      </p>
    </div>
  );
};

export const NoLabel = () => (
  <TimePicker placeholder="Pick a time" minuteStep={30} />
);
