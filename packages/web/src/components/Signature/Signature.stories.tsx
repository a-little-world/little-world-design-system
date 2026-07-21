import React from 'react';
import Signature from './Signature';

export default {
  component: Signature,
  title: 'Components/Signature',
};

export const Default = () => <Signature />;

export const CustomSize = () => (
  <Signature width={600} height={150} label="Please sign below" />
);

export const CustomColors = () => (
  <Signature
    strokeColor="#1D4ED8"
    strokeWidth={3}
    backgroundColor="#EFF6FF"
    label="Signature (blue ink)"
  />
);

export const Disabled = () => (
  <Signature disabled label="Signature capture is disabled" />
);
