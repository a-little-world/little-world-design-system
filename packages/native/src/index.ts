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
export { default as CheckboxGroup } from './components/CheckboxGroup/CheckboxGroup';
export type { CheckboxGroupProps } from './components/CheckboxGroup/CheckboxGroup';
export { default as ChartLibrary } from './components/ChartLibrary/ChartLibrary';
export type { ChartLibraryProps } from './components/ChartLibrary/ChartLibrary';
export { default as DataGrid } from './components/DataGrid/DataGrid';
export type {
  DataGridProps,
  DataGridColumn,
} from './components/DataGrid/DataGrid';
export { default as DatePicker } from './components/DatePicker/DatePicker';
export type { DatePickerProps } from './components/DatePicker/DatePicker';
export { default as Dropdown } from './components/Dropdown/Dropdown';
export { default as FieldError } from './components/FieldError/FieldError';
export type { FieldErrorProps } from './components/FieldError/FieldError';
export { default as FieldHint } from './components/FieldHint/FieldHint';
export type { FieldHintProps } from './components/FieldHint/FieldHint';
export { default as FileUploader } from './components/FileUploader/FileUploader';
export type { FileUploaderProps } from './components/FileUploader/FileUploader';
export { default as FormRow } from './components/FormRow/FormRow';
export type { FormRowProps } from './components/FormRow/FormRow';
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
export { default as Modal } from './components/Modal/Modal';
export type { ModalProps } from './components/Modal/Modal';
export { default as PDFViewer } from './components/PDFViewer/PDFViewer';
export type { PDFViewerProps } from './components/PDFViewer/PDFViewer';
export { default as Popover } from './components/Popover/Popover';
export { default as ProgressBar } from './components/ProgressBar/ProgressBar';
export { default as RadioGroup } from './components/RadioGroup/RadioGroup';
export { default as SearchableSelect } from './components/SearchableSelect/SearchableSelect';
export type { SearchableSelectProps } from './components/SearchableSelect/SearchableSelect';
export { default as Select } from './components/Select/Select';
export type { SelectProps } from './components/Select/Select';
export { default as Separator } from './components/Separator/Separator';
export { default as Signature } from './components/Signature/Signature';
export type { SignatureProps } from './components/Signature/Signature';
export { default as Tags, Tag } from './components/Tags/Tags';
export type { TagProps, TagsProps } from './components/Tags/Tags';
export { default as Text } from './components/Text/Text';
export { default as TextInput } from './components/TextInput/TextInput';
export { default as TimePicker } from './components/TimePicker/TimePicker';
export type { TimePickerProps } from './components/TimePicker/TimePicker';
export { default as ToolTip } from './components/ToolTip/ToolTip';

export * from './theme';
export * from './types';
