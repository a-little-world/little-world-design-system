import React from 'react';
import { Text } from 'react-native';
import styled, { css } from 'styled-components/native';

import Button from '../components/Button/Button';
import Link from '../components/Link/Link';
import replaceUrlsWithAnchors from './replaceUrlsWithAnchors';

const ColorText = styled.Text<{ color: keyof typeof SupportedColorTags }>`
  color: ${({ theme, color }) =>
    color === SupportedColorTags.bold
      ? 'currentColor'
      : theme.color.text[color]};

  ${({ color }) =>
    color === SupportedColorTags.bold || color === SupportedColorTags.highlight
      ? css`
          font-weight: bold;
          font-family: 'SignikaNegativeBold';
        `
      : css`
          font-weight: normal;
          font-family: 'SignikaNegative';
        `};
`;

const ANCHOR_TAG = 'a';
const BUTTON_TAG = 'button';

enum SupportedColorTags {
  highlight = 'highlight',
  bold = 'bold',
}

interface TagInfo {
  start: number;
  end: number;
  tagName: string;
  attributes: Record<string, any>;
  hasClosingTag: boolean;
  contentStart: number;
  contentEnd: number;
}

interface ParserOptions {
  customElements?: {
    Component: React.ElementType;
    props?: Record<string, any>;
    tag: string;
  }[];
  onlyLinks?: boolean;
}

const findTags = (text: string): TagInfo[] => {
  const tags: TagInfo[] = [];
  const textLength = text.length;
  let position = 0;

  while (position < textLength) {
    const openBracket = text.indexOf('<', position);
    if (openBracket === -1) break;

    const closeBracket = text.indexOf('>', openBracket);
    if (closeBracket === -1) break;

    // Extract tag content
    const tagContent = text.substring(openBracket + 1, closeBracket);

    // Check if it's a valid opening tag (starts with letter)
    if (/^[a-zA-Z]/.test(tagContent)) {
      const firstSpace = tagContent.indexOf(' ');
      const tagName =
        firstSpace === -1 ? tagContent : tagContent.substring(0, firstSpace);
      const attributesText =
        firstSpace === -1 ? '' : tagContent.substring(firstSpace + 1);

      // Parse attributes safely
      let attributes: Record<string, any> = {};
      if (attributesText.trim()) {
        try {
          attributes = JSON.parse(attributesText);
        } catch {
          // Invalid JSON - treat as plain text
          position = closeBracket + 1;
          continue;
        }
      }

      // Look for closing tag
      const closingTag = `</${tagName}>`;
      const closingTagIndex = text.indexOf(closingTag, closeBracket + 1);

      if (closingTagIndex !== -1) {
        // Found complete tag
        tags.push({
          start: openBracket,
          end: closingTagIndex + closingTag.length,
          tagName,
          attributes,
          hasClosingTag: true,
          contentStart: closeBracket + 1,
          contentEnd: closingTagIndex,
        });
        position = closingTagIndex + closingTag.length;
      } else {
        // No closing tag - treat as plain text
        position = closeBracket + 1;
      }
    } else {
      // Not a valid tag - move past it
      position = closeBracket + 1;
    }
  }

  return tags;
};

// Unified content parser that handles both onlyLinks and normal modes
const parseContent = (
  content: string,
  options: ParserOptions,
): Array<string | React.ReactElement> => {
  const tags = findTags(content);

  if (tags.length === 0) {
    return [content];
  }

  const components: Array<string | React.ReactElement> = [];
  let currentIndex = 0;

  for (const tag of tags) {
    // Add text before this tag
    if (tag.start > currentIndex) {
      components.push(content.substring(currentIndex, tag.start));
    }

    // Extract content between tags
    const tagContent = content.substring(tag.contentStart, tag.contentEnd);

    // Process the tag based on type and options
    if (tag.tagName === ANCHOR_TAG) {
      // Always process anchor tags
      const nestedContent = parseContent(tagContent, options);
      components.push(
        tag.attributes.href || tag.attributes.to ? (
          <Link
            key={`${tag.tagName}-${tag.start}-${tag.end}`}
            to={tag.attributes.href || tag.attributes.to}
            {...tag.attributes}
          >
            {nestedContent}
          </Link>
        ) : (
          <Text key={`${tag.tagName}-${tag.start}-${tag.end}`}>
            {nestedContent}
          </Text>
        ),
      );
    } else if (options.onlyLinks) {
      // In onlyLinks mode, treat all non-anchor tags as plain text
      components.push(content.substring(tag.start, tag.end));
    } else if (tag.tagName === BUTTON_TAG) {
      const nestedContent = parseContent(tagContent, options);
      components.push(
        <Button
          key={`${tag.tagName}-${tag.start}-${tag.end}`}
          {...tag.attributes}
        >
          {nestedContent}
        </Button>,
      );
    } else if (
      Object.values(SupportedColorTags).includes(
        tag.tagName as SupportedColorTags,
      )
    ) {
      const nestedContent = parseContent(tagContent, options);
      components.push(
        <ColorText
          key={`${tag.tagName}-${tag.start}-${tag.end}`}
          color={SupportedColorTags[tag.tagName as SupportedColorTags]}
        >
          {nestedContent}
        </ColorText>,
      );
    } else if (options.customElements) {
      // Check for custom elements
      const customElement = options.customElements.find(
        element => element.tag === tag.tagName,
      );
      if (customElement) {
        const nestedContent = parseContent(tagContent, options);
        components.push(
          <customElement.Component
            key={`${tag.tagName}-${tag.start}-${tag.end}`}
            {...tag.attributes}
            {...customElement.props}
          >
            {nestedContent}
          </customElement.Component>,
        );
      } else {
        // Unrecognized tag, add as plain text
        components.push(content.substring(tag.start, tag.end));
      }
    } else {
      // Unrecognized tag, add as plain text
      components.push(content.substring(tag.start, tag.end));
    }

    currentIndex = tag.end;
  }

  // Add remaining text after last tag
  if (currentIndex < content.length) {
    components.push(content.substring(currentIndex));
  }

  return components;
};

const textParser = (text: string, options: ParserOptions = {}) => {
  // First convert HTML links to recognised anchor tags
  const textWithParsedUrls = replaceUrlsWithAnchors(text);

  // Find all complete tags
  const tags = findTags(textWithParsedUrls);

  if (tags.length === 0) {
    return <Text>{textWithParsedUrls}</Text>;
  }

  const components: Array<string | React.ReactElement> = [];
  let currentIndex = 0;

  for (const tag of tags) {
    // Add text before this tag
    if (tag.start > currentIndex) {
      components.push(textWithParsedUrls.substring(currentIndex, tag.start));
    }

    // Extract content between tags
    const content = textWithParsedUrls.substring(
      tag.contentStart,
      tag.contentEnd,
    );

    // Process the tag based on type
    if (tag.tagName === ANCHOR_TAG) {
      // Always process anchor tags (even in onlyLinks mode)
      const nestedContent = parseContent(content, options);
      components.push(
        tag.attributes.href || tag.attributes.to ? (
          <Link
            key={`${tag.tagName}-${tag.start}-${tag.end}`}
            to={tag.attributes.href || tag.attributes.to}
            {...tag.attributes}
          >
            {nestedContent}
          </Link>
        ) : (
          <Text key={`${tag.tagName}-${tag.start}-${tag.end}`}>
            {nestedContent}
          </Text>
        ),
      );
    } else if (options.onlyLinks) {
      // In onlyLinks mode, treat all non-anchor tags as plain text
      components.push(textWithParsedUrls.substring(tag.start, tag.end));
    } else if (tag.tagName === BUTTON_TAG) {
      const nestedContent = parseContent(content, options);
      components.push(
        <Button
          key={`${tag.tagName}-${tag.start}-${tag.end}`}
          {...tag.attributes}
        >
          {nestedContent}
        </Button>,
      );
    } else if (
      Object.values(SupportedColorTags).includes(
        tag.tagName as SupportedColorTags,
      )
    ) {
      const nestedContent = parseContent(content, options);
      components.push(
        <ColorText
          key={`${tag.tagName}-${tag.start}-${tag.end}`}
          color={SupportedColorTags[tag.tagName as SupportedColorTags]}
        >
          {nestedContent}
        </ColorText>,
      );
    } else if (options.customElements) {
      // Check for custom elements
      const customElement = options.customElements.find(
        element => element.tag === tag.tagName,
      );
      if (customElement) {
        const nestedContent = parseContent(content, options);
        components.push(
          <customElement.Component
            key={`${tag.tagName}-${tag.start}-${tag.end}`}
            {...tag.attributes}
            {...customElement.props}
          >
            {nestedContent}
          </customElement.Component>,
        );
      } else {
        // Unrecognized tag, add as plain text
        components.push(textWithParsedUrls.substring(tag.start, tag.end));
      }
    } else {
      // Unrecognized tag, add as plain text
      components.push(textWithParsedUrls.substring(tag.start, tag.end));
    }

    currentIndex = tag.end;
  }

  // Add remaining text after last tag
  if (currentIndex < textWithParsedUrls.length) {
    components.push(textWithParsedUrls.substring(currentIndex));
  }

  return (
    <Text>
      {components.map((section, index) =>
        typeof section === 'string' ? (
          <Text key={index}>{section}</Text>
        ) : (
          React.cloneElement(section as React.ReactElement, { key: index })
        ),
      )}
    </Text>
  );
};

export default textParser;
