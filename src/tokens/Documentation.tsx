// @ts-nocheck
import React from 'react';
import styled from 'styled-components';

import Text from '../components/Text/Text';
import tokens from './index';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Panel = styled.div<{ isLight?: boolean }>`
  background: ${({ isLight }) => (isLight ? '#FFFFFF' : '#000000')};
  display: flex;
  flex-direction: column;
  gap: ${tokens.spacing.small};
  align-items: ${({ isLight }) => (isLight ? 'flex-end' : 'flex-start')};
  padding: ${({ isLight }) =>
    isLight
      ? `${tokens.spacing.large} 0 ${tokens.spacing.large}
  ${tokens.spacing.large}`
      : `${tokens.spacing.large} ${tokens.spacing.large}
    ${tokens.spacing.large} 0`};
  width: 100%;
`;

const Entry = styled.div<{ isLight?: boolean }>`
  color: ${({ isLight }) => (isLight ? '#000' : '#FFF')};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${tokens.spacing.small};
  gap: ${tokens.spacing.small};
`;

const Example = styled.div<{ $background: string }>`
  background: ${({ $background }) => $background};
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
`;

const ColorSection = ({ section }: { section: string }) => {
  const light = Object.entries(tokens.color.theme.light[section]);
  const dark = Object.entries(tokens.color.theme.dark[section]);
  console.log({ light, dark });
  return (
    <Container>
      <Panel isLight>
        {light.map(([key, value]) => (
          <Entry key={key} isLight>
            <Text>{key}</Text>
            <Example $background={value as string}>{value}</Example>
          </Entry>
        ))}
      </Panel>
      <Panel>
        {dark.map(([key, value]) => (
          <Entry key={key}>
            <Example $background={value}>{value}</Example>
            <Text>{key}</Text>
          </Entry>
        ))}
      </Panel>
    </Container>
  );
};

export default ColorSection;
