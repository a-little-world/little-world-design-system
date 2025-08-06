// @ts-nocheck
import React from 'react';
import styled, { useTheme } from 'styled-components';

import Text from '../components/Text/Text';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.large};
  max-width: 800px;
`;

const RadiusItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.medium};
  padding: ${({ theme }) => theme.spacing.small};
  border: 1px solid ${({ theme }) => theme.color.border.subtle};
  border-radius: ${({ theme }) => theme.radius.small};
  background: ${({ theme }) => theme.color.surface.primary};
`;

const RadiusVisual = styled.div<{ $radius: string }>`
  width: 120px;
  height: 80px;
  background: ${({ theme }) => theme.color.surface.bold};
  border-radius: ${({ $radius }) => $radius};
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${({ theme }) => theme.color.border.contrast};
`;

const RadiusInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xxxsmall};
  flex: 1;
`;

const RadiusLabel = styled.div`
  font-weight: bold;
  color: ${({ theme }) => theme.color.text.heading};
`;

const RadiusValue = styled.div`
  color: ${({ theme }) => theme.color.text.secondary};
  font-family: monospace;
`;

const RadiusSection = () => {
  const theme = useTheme();
  const radiusTokens = [
    {
      key: 'xxxsmall',
      value: theme.radius.xxxsmall,
      description: '4px - Subtle rounding',
    },
    {
      key: 'xxsmall',
      value: theme.radius.xxsmall,
      description: '8px - Standard rounding',
    },
    {
      key: 'xsmall',
      value: theme.radius.xsmall,
      description: '12px - Comfortable rounding',
    },
    {
      key: 'small',
      value: theme.radius.small,
      description: '16px - Noticeable rounding',
    },
    {
      key: 'medium',
      value: theme.radius.medium,
      description: '20px - Prominent rounding',
    },
    {
      key: 'large',
      value: theme.radius.large,
      description: '24px - Generous rounding',
    },
    {
      key: 'xlarge',
      value: theme.radius.xlarge,
      description: '32px - Substantial rounding',
    },
    {
      key: 'xxlarge',
      value: theme.radius.xxlarge,
      description: '40px - Maximum rounding',
    },
    {
      key: 'massive',
      value: theme.radius.massive,
      description: '100px - Dramatic rounding',
    },
    {
      key: 'half',
      value: theme.radius.half,
      description: '50% - Circular elements',
    },
    {
      key: 'full',
      value: theme.radius.full,
      description: '100% - Fully rounded',
    },
  ];

  return (
    <Container>
      {radiusTokens.map(({ key, value, description }) => (
        <RadiusItem key={key}>
          <RadiusVisual $radius={value}>
            <Text type="Body4">{value}</Text>
          </RadiusVisual>
          <RadiusInfo>
            <RadiusLabel>
              <Text type="Body4">{key}</Text>
            </RadiusLabel>
            <RadiusValue>
              <Text type="Body6">{description}</Text>
            </RadiusValue>
          </RadiusInfo>
        </RadiusItem>
      ))}
    </Container>
  );
};

export default RadiusSection;
