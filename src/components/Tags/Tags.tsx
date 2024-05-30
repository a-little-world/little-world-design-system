import React from 'react';

import Text from '../Text/Text';
import { Tag, TagsContainer } from './styles';

type TagsProps = {
  content: string[];
};

function Tags({ content }: TagsProps) {
  return (
    <TagsContainer>
      {content.map(tag => (
        <Tag key={tag}>
          <Text tag="span">{tag}</Text>
        </Tag>
      ))}
    </TagsContainer>
  );
}

export default Tags;
