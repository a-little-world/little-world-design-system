import React, { useState } from 'react';

import DatePicker from './DatePicker';

export default {
  component: DatePicker,
  title: 'Components/DatePicker',
};

export const Default = args => <DatePicker {...args} />;

Default.args = {
  label: 'Appointment date',
  id: 'date-picker-default',
  placeholder: 'Select a date',
  disabled: false,
};

export const WithPreselectedDate = () => (
  <DatePicker
    label="Date of birth"
    id="date-picker-preselected"
    defaultValue={new Date(1990, 5, 15)}
  />
);

export const WithConstraints = () => {
  const today = new Date();
  const minDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const maxDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
  return (
    <DatePicker
      label="Available dates (next 30 days)"
      id="date-picker-constraints"
      minDate={minDate}
      maxDate={maxDate}
      placeholder="Select within 30 days"
    />
  );
};

export const WithDisabledDates = () => {
  const today = new Date();
  const disabledDates = [
    new Date(today.getFullYear(), today.getMonth(), today.getDate() + 2),
    new Date(today.getFullYear(), today.getMonth(), today.getDate() + 5),
    new Date(today.getFullYear(), today.getMonth(), today.getDate() + 8),
  ];
  return (
    <DatePicker
      label="Choose a session"
      id="date-picker-disabled-dates"
      disabledDates={disabledDates}
      placeholder="Some dates unavailable"
    />
  );
};

export const Controlled = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  return (
    <div>
      <DatePicker
        label="Pick a date"
        id="date-picker-controlled"
        value={date}
        onChange={setDate}
      />
      {date && (
        <p style={{ marginTop: 8, fontSize: 14 }}>
          Selected: {date.toLocaleDateString()}
        </p>
      )}
    </div>
  );
};

export const WithError = () => (
  <DatePicker
    label="Contract start date"
    id="date-picker-error"
    error="Please select a valid start date"
    defaultValue={new Date(2020, 0, 1)}
  />
);

export const Disabled = () => (
  <DatePicker
    label="Locked date"
    id="date-picker-disabled"
    defaultValue={new Date(2024, 3, 22)}
    disabled
  />
);

export const WithoutLabel = () => (
  <DatePicker placeholder="Select a date" />
);
