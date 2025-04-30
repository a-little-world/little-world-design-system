import { mapValues } from 'lodash';
export const coreColors = {
  orange10: '#fde5cf',
  orange20: '#ffbe74',
  orange30: '#F39224',
  orange40: '#db590b',
  orange50: '#9C2308',
  green10: '#c7ebd1',
  green20: '#92D050',
  green30: '#4bd963',
  green40: '#045e45',
  gray10: '#F4F5F7',
  gray20: '#E6E8EC',
  gray30: '#A6A6A6',
  gray40: '#4B4C4F',
  gray50: '#e6e8ec80',
  gray60: '#18191b',
  black: '#000000',
  blue10: '#f3fbff',
  blue20: '#bfe7fb',
  blue30: '#36A9E0',
  blue40: '#0063AF',
  blue50: '#053c56',
  red10: '#ffdde1',
  red20: '#f91010',
  white: '#FFFFFF',
} as const;

const SPACING_BASE = 8; // px

export const pixelateObjValues = (obj: Record<string, number | string>) => mapValues(
  obj,
  (value) => typeof value === 'number' ? `${value}px` : value
);
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