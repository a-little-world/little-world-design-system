import React, { CSSProperties } from 'react';

import Text from '../Text/Text';
import { TextTypes } from '@a-little-world/little-world-design-system-core';
import { ContentWrapper, ImageWrapper, List, ListItem } from './styles';

export enum ContentTypes {
  Paragraph = 'paragraph',
  List = 'list',
  OrderedList = 'orderedList',
  Title = 'title',
  Subtitle = 'subtitle',
  Heading = 'heading',
  Emphasize = 'emphasize',
  Sentence = 'sentence',
  Image = 'image',
}

type Props = {
  content: {
    center?: boolean;
    type: ContentTypes;
    text?: string;
    listItems?: string[];
    color?: string;
    Image?: React.ElementType;
    imageWidth?: string;
    imageMaxWidth?: string;
    style?: CSSProperties;
  }[];
  marginBottom?: string;
};

const TextPage = ({ content, marginBottom }: Props) => {
  return (
    <ContentWrapper $marginBottom={marginBottom}>
      {content.map(
        ({
          color,
          center,
          text,
          type,
          listItems,
          Image,
          imageWidth,
          imageMaxWidth,
          style,
        }) => {
          if (type === ContentTypes.Heading)
            return (
              <Text
                style={style}
                key={text}
                tag="h2"
                type={TextTypes.Heading3}
                color={color}
                center={center}
              >
                {text}
              </Text>
            );

          if (type === ContentTypes.Title)
            return (
              <Text
                style={style}
                key={text}
                tag="h3"
                type={TextTypes.Body2}
                bold
                color={color}
                center={center}
              >
                {text}
              </Text>
            );

          if (type === ContentTypes.Subtitle)
            return (
              <Text
                style={style}
                key={text}
                tag="h4"
                type={TextTypes.Body3}
                bold
                color={color}
                center={center}
              >
                {text}
              </Text>
            );

          if (type === ContentTypes.Paragraph)
            return (
              <Text style={style} key={text} center={center}>
                {text}
              </Text>
            );

          if (type === ContentTypes.Sentence)
            return (
              <Text style={style} key={text} center={center}>
                {text}
              </Text>
            );

          if (type === ContentTypes.List)
            return (
              <List key={listItems?.[0]} style={style}>
                {listItems?.map(item => (
                  <ListItem key={item} tag="li">
                    {item}
                  </ListItem>
                ))}
              </List>
            );

          if (type === ContentTypes.OrderedList)
            return (
              <List key={listItems?.[0]} as="ol" $ordered style={style}>
                {listItems?.map(item => (
                  <ListItem key={item} tag="li">
                    {item}
                  </ListItem>
                ))}
              </List>
            );

          if (type === ContentTypes.Emphasize)
            return (
              <Text style={style} key={text} bold color={color} center={center}>
                {text}
              </Text>
            );

          if (type === ContentTypes.Image)
            return (
              Image && (
                <ImageWrapper
                  $width={imageWidth}
                  $maxWidth={imageMaxWidth}
                  $marginBottom={marginBottom}
                >
                  <Image color={color} {...style} />
                </ImageWrapper>
              )
            );
        },
      )}
    </ContentWrapper>
  );
};

export default TextPage;
