import { CSSProperties, ElementType } from 'react';

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

export interface ContentItem {
  center?: boolean;
  type: ContentTypes;
  text: string;
  listItems?: string[];
  color?: string;
  Image?: ElementType;
  imageWidth?: string;
  imageMaxWidth?: string;
  style?: CSSProperties;
}

export interface TextContentBaseProps {
  content: ContentItem[];
  marginBottom?: string;
}
