import React from 'react';
import Text, { TextTypes } from '../Text/Text';

import { ContentWrapper, List, ListItem } from './styles';

export enum ContentTypes {
  Paragraph = 'paragraph',
  List = 'list',
  Title = 'title',
  Subtitle = 'subtitle',
  Heading = 'heading',
  Emphasize = 'emphasize',
  Sentence = 'sentence',
}

type Props = {
  content: { type: ContentTypes; text: string; listItems: string[] }[];
};

const TextPage = ({ content }: Props) => {
  return (
    <ContentWrapper>
      {content.map(({ text, type, listItems }) => {
        if (type === ContentTypes.Heading)
          return (
            <Text key={text} tag="h2" type={TextTypes.Heading2}>
              {text}
            </Text>
          );

        if (type === ContentTypes.Title)
          return (
            <Text key={text} tag="h3" type={TextTypes.Heading3} bold>
              {text}
            </Text>
          );

        if (type === ContentTypes.Subtitle)
          return (
            <Text key={text} tag="h4" type={TextTypes.Body1} bold>
              {text}
            </Text>
          );

        if (type === ContentTypes.Paragraph)
          return <Text key={text}>{text}</Text>;

        if (type === ContentTypes.Sentence)
          return <Text key={text}>{text}</Text>;

        if (type === ContentTypes.List)
          return (
            <List key={listItems[0]}>
              {listItems.map(item => (
                <ListItem key={item} tag="li">
                  {item}
                </ListItem>
              ))}
            </List>
          );

        if (type === ContentTypes.Emphasize)
          return (
            <Text key={text} bold>
              {text}
            </Text>
          );
      })}
    </ContentWrapper>
  );
};

export default TextPage;
