import React from 'react';

import Text from '../Text/Text';
import TextTypes from '../Text/TextTypes';
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
  content: { type: ContentTypes; text: string; listItems?: string[] }[];
  marginBottom?: string;
};

const TextPage = ({ content, marginBottom }: Props) => {
  return (
    <ContentWrapper $marginBottom={marginBottom}>
      {content.map(({ text, type, listItems }) => {
        if (type === ContentTypes.Heading)
          return (
            <Text key={text} tag="h2" type={TextTypes.Heading3}>
              {text}
            </Text>
          );

        if (type === ContentTypes.Title)
          return (
            <Text key={text} tag="h3" type={TextTypes.Body2} bold>
              {text}
            </Text>
          );

        if (type === ContentTypes.Subtitle)
          return (
            <Text key={text} tag="h4" type={TextTypes.Body3} bold>
              {text}
            </Text>
          );

        if (type === ContentTypes.Paragraph)
          return <Text key={text}>{text}</Text>;

        if (type === ContentTypes.Sentence)
          return <Text key={text}>{text}</Text>;

        if (type === ContentTypes.List)
          return (
            <List key={listItems?.[0]}>
              {listItems?.map(item => (
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
