import React, { useState } from 'react';
import Signature from './Signature';

export default {
  component: Signature,
  title: 'Components/Signature',
};

export const Default = () => {
  const [value, setValue] = useState<string | null>(null);
  return (
    <div>
      <Signature onChange={setValue} />
      {value && (
        <div style={{ marginTop: 16 }}>
          <p style={{ fontSize: 12, color: '#6B7280' }}>Preview:</p>
          <img src={value} alt="signature preview" style={{ border: '1px solid #E5E7EB', borderRadius: 4 }} />
        </div>
      )}
    </div>
  );
};

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
