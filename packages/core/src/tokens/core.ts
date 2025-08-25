export const coreColors = {
  orange10: '#fde5cf',
  orange20: '#ffbe74',
  orange25: '#ffb652',
  orange30: '#F39224',
  orange40: '#db590b',
  orange50: '#9C2308',
  green10: '#c7ebd1',
  green20: '#92D050',
  green30: '#4bd963',
  green35: '#5c9e5e',
  green40: '#045e45',
  gray10: '#F4F5F7',
  gray20: '#E6E8EC',
  gray30: '#b0b1b2',
  gray40: '#A6A6A6',
  gray45: '#6d6d6d',
  gray50: '#4B4C4F',
  gray55: '#404040',
  gray60: '#18191b',
  gray70: '#1A1B1D',
  black: '#000000',
  blue10: '#f3fbff',
  blue20: '#bfe7fb',
  blue30: '#36A9E0',
  blue35: '#3381ce',
  blue40: '#0063AF',
  blue50: '#053c56',
  brown10: '#3e2d20',
  red10: '#ffdde1',
  red20: '#e04d4d',
  red30: '#f91010',
  red40: '#4a191b',
  yellow10: '#fef9d9',
  yellow20: '#ffe766',
  yellow30: '#f5c400',
  yellow40: '#d4a000',
  yellow50: '#4d2e00',
  white: '#FFFFFF',
} as const;

const SPACING_BASE = 8; // px

// Type-safe helper function that preserves the keys of the original object
export const pixelateObjValues = <T extends Record<string, number | string>>(
  obj: T,
): { [K in keyof T]: string } => {
  const result = {} as { [K in keyof T]: string };

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      result[key] =
        typeof obj[key] === 'number' ? `${obj[key]}px` : String(obj[key]);
    }
  }

  return result;
};

const getValue = (multiple: number) => multiple * SPACING_BASE;

export const coreSpacing = {
  space025: getValue(0.25),
  space05: getValue(0.5),
  space10: getValue(1),
  space15: getValue(1.5),
  space20: getValue(2),
  space25: getValue(2.5),
  space30: getValue(3),
  space40: getValue(4),
  space50: getValue(5),
  space60: getValue(6),
  space70: getValue(7),
  space80: getValue(8),
  space90: getValue(9),
  space100: getValue(10),
  space125: getValue(12.5),
  space150: getValue(15),
} as const;
