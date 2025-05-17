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

console.log('React version in native package:', React.version);
console.log('React hooks available:', !!React.useState);

export { default as Button } from "./components/Button/Button";
export { default as Card, CardHeader, CardContent, CardFooter } from "./components/Card/Card";
export * from "./components/Icon";
export * from "./components/Illustrations";
export { default as Link } from "./components/Link/Link";
export { default as Loading} from "./components/Loading/Loading";
export { default as Text } from "./components/Text/Text";
export { default as TextInput } from "./components/Text/Text";
export * from "./theme";
export { loadFonts } from "./utils/loadFonts";