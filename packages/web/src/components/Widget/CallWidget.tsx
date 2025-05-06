import React from 'react';
import styled, { useTheme } from 'styled-components';

import { CallIncomingIcon, CallOutgoingIcon } from '../Icon';
import Text from '../Text/Text';
import Widget, { Preview, WidgetProps, WidgetSizes } from './Widget';

const CallDescription = styled(Text)`
  color: ${({ theme }) => theme.color.text.secondary};
`;

const CallButton = styled.button`
  display: flex;
  align-items: center;
  text-align: left;
  width: 100%;
  gap: ${({ theme }) => theme.spacing.xsmall};
  border-radius: ${({ theme }) => theme.radius.small};
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.color.text.primary};
  background: none;
  border: none;
  padding: 0;
  margin: 0;
`;

const CallIcon = ({
  isPreview,
  isOutgoing,
  isMissed,
}: {
  isPreview?: boolean;
  isOutgoing?: boolean;
  isMissed?: boolean;
}) => {
  const theme = useTheme();

  return isOutgoing ? (
    <CallOutgoingIcon
      label={''}
      width={isPreview ? 12 : 20}
      height={isPreview ? 12 : 20}
      borderColor={theme.color.surface.secondary}
      color={isMissed ? theme.color.status.error : theme.color.text.primary}
      circular={!isPreview}
    />
  ) : (
    <CallIncomingIcon
      label={''}
      width={isPreview ? 12 : 20}
      height={isPreview ? 12 : 20}
      borderColor={theme.color.surface.secondary}
      color={isMissed ? theme.color.status.error : theme.color.text.primary}
      circular={!isPreview}
    />
  );
};

interface CallWidgetProps extends Omit<WidgetProps, 'children'> {
  description: string;
  isPreview?: boolean;
  isMissed?: boolean;
  isOutgoing?: boolean;
  onReturnCall?: () => void;
}

const CallWidget = ({
  description,
  header,
  isMissed,
  isOutgoing,
  isPreview,
  onReturnCall,
  ...widgetProps
}: CallWidgetProps) => {
  if (isPreview)
    return (
      <Preview>
        <CallIcon
          isMissed={isMissed}
          isOutgoing={isOutgoing}
          isPreview={isPreview}
        />
        <Text>{header}</Text>
      </Preview>
    );

  return (
    <Widget width={WidgetSizes.Medium} {...widgetProps}>
      <CallButton onClick={onReturnCall}>
        <CallIcon isMissed={isMissed} isOutgoing={isOutgoing} />
        <div>
          <Text bold>{header}</Text>
          {!isPreview && (
            <CallDescription disableParser>
              {description || 'N/A'}
            </CallDescription>
          )}
        </div>
      </CallButton>
    </Widget>
  );
};

export default CallWidget;
