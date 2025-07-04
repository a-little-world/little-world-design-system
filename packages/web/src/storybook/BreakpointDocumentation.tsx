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

const BreakpointItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.medium};
  padding: ${({ theme }) => theme.spacing.small};
  border: 1px solid ${({ theme }) => theme.color.border.subtle};
  border-radius: ${({ theme }) => theme.radius.small};
  background: ${({ theme }) => theme.color.surface.primary};
`;

const BreakpointVisual = styled.div<{ $width: string }>`
  width: ${({ $width }) => $width};
  height: 60px;
  background: ${({ theme }) => theme.color.surface.bold};
  border-radius: ${({ theme }) => theme.radius.xxsmall};
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${({ theme }) => theme.color.border.contrast};
  position: relative;
  min-width: 80px;
`;

const BreakpointInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xxxsmall};
  flex: 1;
`;

const BreakpointLabel = styled.div`
  font-weight: bold;
  color: ${({ theme }) => theme.color.text.heading};
`;

const BreakpointValue = styled.div`
  color: ${({ theme }) => theme.color.text.secondary};
  font-family: monospace;
`;

const BreakpointDescription = styled.div`
  color: ${({ theme }) => theme.color.text.tertiary};
  font-size: 0.875rem;
`;

const BreakpointSection = () => {
  const theme = useTheme();
  const breakpointTokens = [
    { 
      key: 'xsmall', 
      value: theme.breakpoints.xsmall, 
      description: '360px - Mobile devices in portrait mode',
      useCase: 'Small mobile screens'
    },
    { 
      key: 'small', 
      value: theme.breakpoints.small, 
      description: '500px - Small tablets and large mobile devices',
      useCase: 'Large mobile and small tablets'
    },
    { 
      key: 'medium', 
      value: theme.breakpoints.medium, 
      description: '700px - Tablets and small laptops',
      useCase: 'Tablets and small laptops'
    },
    { 
      key: 'large', 
      value: theme.breakpoints.large, 
      description: '900px - Desktop screens and large tablets',
      useCase: 'Desktop screens'
    },
    { 
      key: 'xlarge', 
      value: theme.breakpoints.xlarge, 
      description: '1200px - Large desktop screens',
      useCase: 'Large desktop screens'
    },
    { 
      key: 'xxlarge', 
      value: theme.breakpoints.xxlarge, 
      description: '1600px - Extra large screens and high-resolution displays',
      useCase: 'Extra large screens'
    },
  ];

  return (
    <Container>
      {breakpointTokens.map(({ key, value, description, useCase }) => (
        <BreakpointItem key={key}>
          <BreakpointVisual $width={value}>
            <Text type="Body6" style={{ color: 'white', fontSize: '10px' }}>
              {value}
            </Text>
          </BreakpointVisual>
          <BreakpointInfo>
            <BreakpointLabel>
              <Text type="Body4">{key}</Text>
            </BreakpointLabel>
            <BreakpointValue>
              <Text type="Body6">{description}</Text>
            </BreakpointValue>
            <BreakpointDescription>
              <Text type="Body6">{useCase}</Text>
            </BreakpointDescription>
          </BreakpointInfo>
        </BreakpointItem>
      ))}
    </Container>
  );
};

export default BreakpointSection; 