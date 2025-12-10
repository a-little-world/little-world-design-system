import React from 'react';

// Force hooks to be accessed through React (Test if still needed)
const {
  useState, // eslint-disable-line @typescript-eslint/no-unused-vars
  useEffect, // eslint-disable-line @typescript-eslint/no-unused-vars
  useRef, // eslint-disable-line @typescript-eslint/no-unused-vars
  useCallback, // eslint-disable-line @typescript-eslint/no-unused-vars
  useMemo, // eslint-disable-line @typescript-eslint/no-unused-vars
  createContext, // eslint-disable-line @typescript-eslint/no-unused-vars
  forwardRef, // eslint-disable-line @typescript-eslint/no-unused-vars
} = React;

export { default as Accordion } from './components/Accordion/Accordion';
export { default as Button } from './components/Button/Button';
export {
  default as Card,
  CardHeader,
  CardContent,
  CardFooter,
} from './components/Card/Card';
export { default as Checkbox } from './components/Checkbox/Checkbox';
export { default as Dropdown } from './components/Dropdown/Dropdown';
export { default as Gradient } from './components/Gradient/Gradient';

export * from './components/Icon';
export * from './components/Illustrations';

export { default as Label } from './components/Label/Label';
export type { LabelProps } from './components/Label/Label';
export { default as Link } from './components/Link/Link';
export {
  default as Loading,
  LoadingSizes,
  LoadingType,
} from './components/Loading/Loading';
export { default as LoadingLogo } from './components/Loading/LoadingLogo';
export type { LoadingLogoProps } from './components/Loading/LoadingLogo';
export { default as Popover } from './components/Popover/Popover';
export { default as ProgressBar } from './components/ProgressBar/ProgressBar';
export { default as RadioGroup } from './components/RadioGroup/RadioGroup';
export { default as Separator } from './components/Separator/Separator';
export { default as Tags, Tag } from './components/Tags/Tags';
export type { TagProps, TagsProps } from './components/Tags/Tags';
export { default as Text } from './components/Text/Text';
export { default as TextInput } from './components/TextInput/TextInput';
export { default as ToolTip } from './components/ToolTip/ToolTip';

export * from './theme';
export * from './types';
