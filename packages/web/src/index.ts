import './theme/theme';

export { default as Accordion, AccordionContent } from "./components/Accordion/Accordion";
export {
  default as Button,
  ButtonAppearance,
  ButtonSizes,
  ButtonVariations,
} from "./components/Button/Button";
export { OPTION_BUTTON_CSS } from "./components/Button/styles";
export {
  default as Card,
  CardContent,
  CardDimensions,
  CardSizes,
  CardFooter,
  CardHeader,
} from "./components/Card/Card";
export { default as Checkbox } from "./components/Checkbox/Checkbox";
export { default as CheckboxGrid } from "./components/CheckboxGrid/CheckboxGrid";
export { default as Dropdown } from "./components/Dropdown/Dropdown";

export { default as MultiDropdown } from "./components/MultiDropdown/MultiDropdown";
export * from "./components/Icon";
export * from "./components/Illustrations";
export { default as InputError } from "./components/InputError/InputError";
export { default as Label } from "./components/Label/Label";
export { default as Link } from "./components/Link/Link";
export { default as Loading, LoadingSizes } from "./components/Loading/Loading";
export { default as Modal } from "./components/Modal/Modal";
export { default as MultiCheckbox } from "./components/MultiCheckbox/MultiCheckbox";
export { default as MultiSelection } from "./components/MultiSelection/MultiSelection";
export {
  NavigationMenu,
  NavigationMenuCallout,
  NavigationMenuContent,
  NavigationMenuContentItem,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  MenuContentLayout,
} from "./components/NavigationMenu/NavigationMenu";
export { default as ProgressBar } from "./components/ProgressBar/ProgressBar";
export { default as Popover } from "./components/Popover/Popover";
export { default as RadioGroup } from "./components/RadioGroup/RadioGroup";
export { default as Separator } from "./components/Separator/Separator";
export { default as Slider } from "./components/Slider/Slider";
export {
  default as StarRating,
  StarRatingSizes,
} from "./components/StarRating/StarRating";
export { default as StatusMessage } from "./components/StatusMessage/StatusMessage";
export { default as Switch } from "./components/Switch/Switch";
export {
  default as Tags,
  Tag,
  TagSizes,
  TagAppearance,
} from "./components/Tags/Tags";
export { default as Text } from "./components/Text/Text";

export {
  default as TextArea,
  TextAreaSize,
} from "./components/TextArea/TextArea";
export {
  default as TextContent,
  ContentTypes,
} from "./components/TextContent/TextContent";
export {
  default as TextInput,
  InputHeight,
  InputWidth,
} from "./components/TextInput/TextInput";
export { default as Toast } from "./components/Toast/Toast";
export { ToastProvider, ToastViewport } from './components/Toast/styles';
export { default as ToolTip } from "./components/ToolTip/ToolTip";
export { default as CallWidget } from "./components/Widget/CallWidget";
export { default as Widget, WidgetSizes } from "./components/Widget/Widget";
export { default as AttachmentWidget } from "./components/Widget/AttachmentWidget";

export { CustomThemeProvider, themeContext } from "./theme";
export { default as GlobalStyles } from "./globalStyles";
export { default as textParser } from "./utils/parser";
export { pixelate } from "./utils/styles";

// types
export type { TextStyle } from "./components/Text/types";

// export core elements
export {
  Gradients,
  StatusTypes,
  TextTypes,
  ToastBaseProps,
  ThemeVariants,
  tokensPixelated as tokens,
} from "@a-little-world/little-world-design-system-core";

export type { ThemeWeb } from '@a-little-world/little-world-design-system-core';
