import React, { useState } from 'react';

import CheckboxGrid from './CheckboxGrid';

export default {
  component: CheckboxGrid,
  title: 'Components/CheckboxGrid',
};

export const Default = args => <CheckboxGrid {...args} />;

// This simulates how the component is used in a controlled form scenario
export const Controlled = args => {
  const [value, setValue] = useState({});
  const [error, setError] = useState(null);

  const handleSelection = eventOrValue => {
    const newVal = eventOrValue?.target
      ? eventOrValue.target.value
      : eventOrValue;
    setValue(newVal);
    console.log('Selection changed:', newVal);
  };

  return (
    <div>
      <CheckboxGrid
        key={`lang_skill`}
        {...args}
        name="lang_skill"
        preSelected={value || {}}
        onSelection={handleSelection}
        error={error}
      />
      <div
        style={{ marginTop: '20px', padding: '10px', background: '#f5f5f5' }}
      >
        <strong>Current Value:</strong>
        <pre>{JSON.stringify(value, null, 2)}</pre>
      </div>
    </div>
  );
};

const columnHeadingsDummy = [
  'Uhrzeit',
  'Monday',
  'Teusday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const rowHeadingsDummy = [
  '8 bis 10 Uhr',
  '10 bis 12 Uhr',
  '12 bis 14 Uhr',
  '14 bis 16 Uhr',
  '16 bis 18 Uhr',
  '18 bis 20 Uhr',
  '20 bis 22 Uhr',
];

const checkboxesByColumn = JSON.parse(
  '[[{"name":"8 to 10 a.m.","value":"08_10","key":"mo"},{"name":"10 to 12 p.m.","value":"10_12","key":"mo"},{"name":"12 to 2 p.m.","value":"12_14","key":"mo"},{"name":"2 to 4 p.m.","value":"14_16","key":"mo"},{"name":"4 to 6 p.m.","value":"16_18","key":"mo"},{"name":"6 to 8 p.m.","value":"18_20","key":"mo"},{"name":"8 to 10 p.m.","value":"20_22","key":"mo"}],[{"name":"8 to 10 a.m.","value":"08_10","key":"tu"},{"name":"10 to 12 p.m.","value":"10_12","key":"tu"},{"name":"12 to 2 p.m.","value":"12_14","key":"tu"},{"name":"2 to 4 p.m.","value":"14_16","key":"tu"},{"name":"4 to 6 p.m.","value":"16_18","key":"tu"},{"name":"6 to 8 p.m.","value":"18_20","key":"tu"},{"name":"8 to 10 p.m.","value":"20_22","key":"tu"}],[{"name":"8 to 10 a.m.","value":"08_10","key":"we"},{"name":"10 to 12 p.m.","value":"10_12","key":"we"},{"name":"12 to 2 p.m.","value":"12_14","key":"we"},{"name":"2 to 4 p.m.","value":"14_16","key":"we"},{"name":"4 to 6 p.m.","value":"16_18","key":"we"},{"name":"6 to 8 p.m.","value":"18_20","key":"we"},{"name":"8 to 10 p.m.","value":"20_22","key":"we"}],[{"name":"8 to 10 a.m.","value":"08_10","key":"th"},{"name":"10 to 12 p.m.","value":"10_12","key":"th"},{"name":"12 to 2 p.m.","value":"12_14","key":"th"},{"name":"2 to 4 p.m.","value":"14_16","key":"th"},{"name":"4 to 6 p.m.","value":"16_18","key":"th"},{"name":"6 to 8 p.m.","value":"18_20","key":"th"},{"name":"8 to 10 p.m.","value":"20_22","key":"th"}],[{"name":"8 to 10 a.m.","value":"08_10","key":"fr"},{"name":"10 to 12 p.m.","value":"10_12","key":"fr"},{"name":"12 to 2 p.m.","value":"12_14","key":"fr"},{"name":"2 to 4 p.m.","value":"14_16","key":"fr"},{"name":"4 to 6 p.m.","value":"16_18","key":"fr"},{"name":"6 to 8 p.m.","value":"18_20","key":"fr"},{"name":"8 to 10 p.m.","value":"20_22","key":"fr"}],[{"name":"8 to 10 a.m.","value":"08_10","key":"sa"},{"name":"10 to 12 p.m.","value":"10_12","key":"sa"},{"name":"12 to 2 p.m.","value":"12_14","key":"sa"},{"name":"2 to 4 p.m.","value":"14_16","key":"sa"},{"name":"4 to 6 p.m.","value":"16_18","key":"sa"},{"name":"6 to 8 p.m.","value":"18_20","key":"sa"},{"name":"8 to 10 p.m.","value":"20_22","key":"sa"}],[{"name":"8 to 10 a.m.","value":"08_10","key":"su"},{"name":"10 to 12 p.m.","value":"10_12","key":"su"},{"name":"12 to 2 p.m.","value":"12_14","key":"su"},{"name":"2 to 4 p.m.","value":"14_16","key":"su"},{"name":"4 to 6 p.m.","value":"16_18","key":"su"},{"name":"6 to 8 p.m.","value":"18_20","key":"su"},{"name":"8 to 10 p.m.","value":"20_22","key":"su"}]]',
);

const defaultArgs = {
  id: 'multi selector id',
  onSelection: data => console.log({ data }),
  columnHeadings: columnHeadingsDummy,
  rowHeadings: rowHeadingsDummy,
  checkboxesByColumn,
  highlightCells: {
    mo: ['10_12'],
    sa: ['12_14'],
    th: ['08_10'],
    we: ['16_18', '18_20', '20_22'],
  },
  preSelected: {
    mo: ['10_12'],
    we: ['10_12'],
  },
};

Default.args = defaultArgs;
Controlled.args = defaultArgs;
