import React, { FC, PropsWithChildren } from 'react';

import { TextTypes } from '@a-little-world/little-world-design-system-core';
import { StyledTag, TagAppearance, TagSizes, TagsContainer } from './styles';

interface TagProps {
  bold?: boolean;
  className?: string;
  appearance?: keyof typeof TagAppearance;
  size?: keyof typeof TagSizes;
  color?: string;
}
interface TagsProps extends TagProps {
  content: string[];
}

export const Tag: FC<PropsWithChildren<TagProps>> = ({
  bold,
  children,
  className,
  size = TagSizes.large,
  appearance = TagAppearance.outline,
  color,
}) => {
  return (
    <StyledTag
      className={className}
      bold={bold}
      type={size === TagSizes.small ? TextTypes.Body6 : TextTypes.Body5}
      $appearance={appearance}
      $color={color}
      $size={size}
    >
      {children}
    </StyledTag>
  );
};

function Tags({
  appearance,
  bold,
  color,
  content,
  className,
  size,
}: TagsProps) {
  return (
    <TagsContainer className={className}>
      {content.map(tag => (
        <Tag
          key={tag}
          bold={bold}
          size={size}
          color={color}
          appearance={appearance}
        >
          {tag}
        </Tag>
      ))}
    </TagsContainer>
  );
}

export { TagAppearance, TagSizes } from './styles';
export default Tags;
