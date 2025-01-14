import React from 'react';
import styled from 'styled-components';

import Button from '../components/Button/Button';
import Link from '../components/Link/Link';
import { CallWidget } from '..';

const ColorText = styled.strong<{ color: keyof typeof SupportedColorTags }>`
  color: ${({ theme, color }) =>
    color === SupportedColorTags.bold
      ? 'currentColor'
      : theme.color.text[color]};
`;

const ANCHOR_TAG = 'a';
const BUTTON_TAG = 'button';
const regex = RegExp(/<(\w+)((?:\s+[^>]*)*)>(.*?)<\/\1>/, 'gim');
const CALLWIDGET_TAG = 'CallWidget';

const parseAttributes = (string: string) => {
  try {
    const attrs = JSON.parse(string);
    return attrs;
  } catch (e) {
    return {};
  }
};

enum SupportedColorTags {
  highlight = 'highlight',
  bold = 'bold',
}


const textParser = (text: string) => {
  const components = [];
  let match;
  let currentIndex = 0;

  // utilises the exec function - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec#return_value
  while ((match = regex.exec(text)) !== null) {
    const textBetweenMatches = text.substring(currentIndex, match.index);
    components.push(textBetweenMatches);

    // update index to be last character of match
    currentIndex = match.index + match[0].length;

    const tag = match[1];
    if (tag === ANCHOR_TAG) {
      const attrs = parseAttributes(match[2]?.trim());
      components.push(
        attrs.href ? (
          <Link key={tag + match[3]} to={attrs.href} {...attrs}>
            {match[3]}
          </Link>
        ) : (
          match[3]
        ),
      );
      continue;
    }

    if (tag === BUTTON_TAG) {
      const attrs = parseAttributes(match[2]?.trim());
      components.push(
        <Button key={tag + match[3]} {...attrs}>
          {match[3]}
        </Button>,
      );

      continue;
    }

    if (tag === CALLWIDGET_TAG){
      const attrs = parseAttributes(match[2]?.trim());
      components.push(
        <CallWidget {...attrs}></CallWidget>
      )
    }

    if (Object.values(SupportedColorTags).includes(tag as SupportedColorTags)) {
      components.push(
        <ColorText
          key={tag + match[3]}
          color={SupportedColorTags[tag as SupportedColorTags]}
        >
          {match[3]}
        </ColorText>,
      );
      continue;
    }

    // unrecognised tags are returned unprocessed
    components.push(text.substring(match.index, currentIndex));
  }

  // reset regex index
  regex.lastIndex = 0;

  if (!components.length) return text;

  // ensure remaining string after last tag is included
  if (currentIndex !== text.length)
    components.push(text.substring(currentIndex));

  return <span>{components.map(section => section)}</span>;
};

export default textParser;
