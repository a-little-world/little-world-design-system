import { TagBaseProps } from "@a-little-world/little-world-design-system-core";
import React from "react";
export interface TagProps extends TagBaseProps {
    style?: any;
}
export interface TagsProps extends TagProps {
    content: string[];
}
export declare const Tag: React.FC<TagProps>;
declare function Tags({ appearance, bold, color, content, size, style }: TagsProps): import("react/jsx-runtime").JSX.Element;
export default Tags;
