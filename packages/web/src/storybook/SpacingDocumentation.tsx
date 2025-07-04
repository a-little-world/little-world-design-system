// @ts-nocheck
import React from 'react';
import styled, { useTheme } from 'styled-components';

import Text from '../components/Text/Text';
import { tokensPixelated } from '@a-little-world/little-world-design-system-core';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.large};
  max-width: 800px;
`;

const SpacingItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.medium};
  padding: ${({ theme }) => theme.spacing.small};
  border: 1px solid ${({ theme }) => theme.color.border.subtle};
  border-radius: ${({ theme }) => theme.radius.small};
  background: ${({ theme }) => theme.color.surface.primary};
`;

const SpacingVisual = styled.div<{ $size: string }>`
  width: 200px;
  height: 24px;
  background: ${({ theme }) => theme.color.surface.bold};
  border-radius: ${({ theme }) => theme.radius.xxsmall};
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 60px;
  padding: ${({ $size }) => $size};
`;

const SpacingInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xxxsmall};
  flex: 1;
`;

const SpacingLabel = styled.div`
  font-weight: bold;
  color: ${({ theme }) => theme.color.text.heading};
`;

const SpacingValue = styled.div`
  color: ${({ theme }) => theme.color.text.secondary};
  font-family: monospace;
`;

const SpacingSection = () => {
  const theme = useTheme();
  const spacingTokens = [
    { key: 'xxxxsmall', value: theme.spacing.xxxxsmall, description: '2px - Minimal spacing' },
    { key: 'xxxsmall', value: theme.spacing.xxxsmall, description: '4px - Tight spacing' },
    { key: 'xxsmall', value: theme.spacing.xxsmall, description: '8px - Standard spacing' },
    { key: 'xsmall', value: theme.spacing.xsmall, description: '12px - Comfortable spacing' },
    { key: 'small', value: theme.spacing.small, description: '16px - Standard section spacing' },
    { key: 'medium', value: theme.spacing.medium, description: '24px - Breathing room' },
    { key: 'large', value: theme.spacing.large, description: '32px - Generous spacing' },
    { key: 'xlarge', value: theme.spacing.xlarge, description: '40px - Substantial spacing' },
    { key: 'xxlarge', value: theme.spacing.xxlarge, description: '64px - Maximum spacing' },
    { key: 'massive', value: theme.spacing.massive, description: '120px - Dramatic spacing' },
  ];

  return (
    <Container>
      {spacingTokens.map(({ key, value, description }) => (
        <SpacingItem key={key}>
          <SpacingVisual $size={value}>
            <Text type="Body4" style={{ color: 'white' }}>
              {value}
            </Text>
          </SpacingVisual>
          <SpacingInfo>
            <SpacingLabel>
              <Text type="Body4">{key}</Text>
            </SpacingLabel>
            <SpacingValue>
              <Text type="Body6">{description}</Text>
            </SpacingValue>
          </SpacingInfo>
        </SpacingItem>
      ))}
    </Container>
  );
};

export default SpacingSection; 