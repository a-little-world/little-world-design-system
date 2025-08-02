import React from "react";
import { Text } from "react-native";
import styled, { css } from "styled-components/native";

import Button from "../components/Button/Button";
import Link from "../components/Link/Link";
import replaceUrlsWithAnchors from "./replaceUrlsWithAnchors";

// Move styled component creation to module level to prevent dynamic creation
const ColorText = styled.Text<{ color: keyof typeof SupportedColorTags }>`
  color: ${({ theme, color }) =>
    color === SupportedColorTags.bold
      ? "currentColor"
      : theme.color.text[color]};

  ${({ color }) =>
    color === SupportedColorTags.bold || color === SupportedColorTags.highlight
      ? css`
          font-weight: bold;
          font-family: "SignikaNegativeBold";
        `
      : css`
          font-weight: normal;
          font-family: "SignikaNegative";
        `};
`;

const ANCHOR_TAG = "a";
const BUTTON_TAG = "button";

const regex = RegExp(/<(\w+)((?:\s+[^>]*)*)>(.*?)<\/\1>/, "gim");

const parseAttributes = (string: string) => {
  try {
    const attrs = JSON.parse(string);
    return attrs;
  } catch (e) {
    return {};
  }
};

enum SupportedColorTags {
  highlight = "highlight",
  bold = "bold",
}

// Create a React component to prevent dynamic styled component creation
const ParsedText: React.FC<{
  text: string;
  options?: {
    customElements?: {
      Component: React.ElementType;
      props?: { [key: string]: any };
      tag: string;
    }[];
    onlyLinks?: boolean;
  };
}> = React.memo(({ text, options = {} }) => {
  const components: React.ReactNode[] = [];
  let match: RegExpExecArray | null;
  let currentIndex = 0;

  // first convert html links to recognised anchor tag
  const textWithParsedUrls = replaceUrlsWithAnchors(text);

  // utilises the exec function - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec#return_value
  while ((match = regex.exec(textWithParsedUrls)) !== null) {
    const textBetweenMatches = textWithParsedUrls.substring(
      currentIndex,
      match.index
    );

    // Only add text if it's not empty
    if (textBetweenMatches) {
      components.push(textBetweenMatches);
    }

    // update index to be last character of match
    currentIndex = match.index + match[0].length;

    const tag = match[1];
    const attrs = parseAttributes(match[2]?.trim());

    if (tag === ANCHOR_TAG) {
      components.push(
        attrs.href || attrs.to ? (
          <Link key={tag + match[3]} to={attrs.href || attrs.to} {...attrs}>
            {match[3]}
          </Link>
        ) : (
          <Text key={tag + match[3]}>{match[3]}</Text>
        )
      );
      continue;
    }

    // do not parse other tags if onlyLinks is true
    if (options.onlyLinks) {
      components.push(
        <Text key={match.index}>
          {textWithParsedUrls.substring(match.index, currentIndex)}
        </Text>
      );
      continue;
    }

    if (tag === BUTTON_TAG) {
      components.push(
        <Button key={tag + match[3]} {...attrs}>
          {match[3]}
        </Button>
      );
      continue;
    }

    if (Object.values(SupportedColorTags).includes(tag as SupportedColorTags)) {
      components.push(
        <ColorText
          key={tag + match[3]}
          color={SupportedColorTags[tag as SupportedColorTags]}
        >
          {match[3]}
        </ColorText>
      );
      continue;
    }

    // allows for the text parser to be extended and include custom components
    const customElementFound = options.customElements?.some((element) => {
      if (tag === element.tag) {
        components.push(
          <element.Component
            key={tag + match?.[3]}
            {...attrs}
            {...element?.props}
          >
            {match?.[3] ?? null}
          </element.Component>
        );
        return true;
      }
      return false;
    });
    if (customElementFound) continue;

    // unrecognised tags are returned unprocessed
    components.push(
      <Text key={match.index}>
        {textWithParsedUrls.substring(match.index, currentIndex)}
      </Text>
    );
  }

  // reset regex index
  regex.lastIndex = 0;

  if (!components.length) return <Text>{textWithParsedUrls}</Text>;

  // ensure remaining string after last tag is included
  if (currentIndex !== textWithParsedUrls.length) {
    const remainingText = textWithParsedUrls.substring(currentIndex);
    if (remainingText) {
      components.push(remainingText);
    }
  }

  return (
    <Text>
      {components.map((section, index) =>
        typeof section === "string" ? (
          <Text key={index}>{section}</Text>
        ) : (
          React.cloneElement(section as React.ReactElement, { key: index })
        )
      )}
    </Text>
  );
});

// Keep the original function signature for backward compatibility
const textParser = (
  text: string,
  options: {
    customElements?: {
      Component: React.ElementType;
      props?: { [key: string]: any };
      tag: string;
    }[];
    onlyLinks?: boolean;
  } = {}
) => {
  return <ParsedText text={text} options={options} />;
};

export default textParser;
