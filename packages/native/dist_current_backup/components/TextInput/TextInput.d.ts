import { TextInputBaseProps } from "@a-little-world/little-world-design-system-core";
import React from "react";
import { TextInput as RNTextInput } from "react-native";
interface Props extends React.ComponentProps<typeof RNTextInput>, TextInputBaseProps {
    inputRef?: React.RefObject<RNTextInput>;
    type?: "text" | "password" | "tel";
}
declare const TextInput: React.FC<Props>;
export default TextInput;
