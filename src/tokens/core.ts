export const coreColors = {
  orange10: '#fde5cf',
  orange20: '#F39224',
  orange30: '#db590b',
  orange40: '#9C2308',
  green10: '#c7ebd1',
  green20: '#92D050',
  green30: '#045e45',
  gray10: '#F4F5F7',
  gray20: '#E6E8EC',
  gray30: '#A6A6A6',
  gray40: '#4B4C4F',
  gray50: '#e6e8ec80',
  gray60: '#18191b',
  black: '#000000',
  blue10: '#36A9E0',
  blue20: '#0063AF',
  red10: '#ffdde1',
  red20: '#f91010',
  white: '#FFFFFF',
} as const;

const SPACING_BASE = 8; // px
const getPixelValue = (multiple: number) => `${multiple * SPACING_BASE}px`;

export const coreSpacing = {
  space025: getPixelValue(0.25),
  space05: getPixelValue(0.5),
  space10: getPixelValue(1),
  space15: getPixelValue(1.5),
  space20: getPixelValue(2),
  space25: getPixelValue(2.5),
  space30: getPixelValue(3),
  space40: getPixelValue(4),
  space50: getPixelValue(5),
  space60: getPixelValue(6),
  space70: getPixelValue(7),
  space80: getPixelValue(8),
  space90: getPixelValue(9),
  space100: getPixelValue(10),
  space125: getPixelValue(12.5),
  space150: getPixelValue(15),
} as const;
