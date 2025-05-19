import React from 'react';

// Force hooks to be accessed through React
const {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
  createContext,
  forwardRef
} = React;

export { default as Button } from "./components/Button/Button";
export { default as Card, CardHeader, CardContent, CardFooter } from "./components/Card/Card";
export * from "./components/Icon";
export * from "./components/Illustrations";
export { default as Label } from "./components/Label/Label";
export type { LabelProps } from "./components/Label/Label";
export { default as Link } from "./components/Link/Link";
export { default as Loading} from "./components/Loading/Loading";
export { default as Tags, Tag } from "./components/Tags/Tags";
export type { TagProps, TagsProps } from "./components/Tags/Tags";
export { default as Text } from "./components/Text/Text";
export { default as TextInput } from "./components/Text/Text";
export * from "./theme";
export { loadFonts } from "./utils/loadFonts";