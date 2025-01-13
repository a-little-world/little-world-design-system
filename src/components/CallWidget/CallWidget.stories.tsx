import React from 'react';

import Button, { ButtonVariations } from '../Button/Button';
import Widget, { WidgetHeader } from './CallWidget';
import WidgetContent from './CallWidget';
import { PhoneIcon, PhoneSlashIcon } from '../Icon';
import styled from 'styled-components';
import tokens from '../../tokens';
import Text from '../Text/Text';
import TextTypes from '../Text/TextTypes';

export default {
  component: Widget,
  title: 'Components/CallWidget',
};

export const Default = args => <Widget {...args}>Blah Blah</Widget>;

export const CallWidget = args => (
  <Widget {...args}>
    <WidgetHeader>Call</WidgetHeader>
    <WidgetContent>
      {/* Icon und Dauer in einem flexiblen Layout */}
      <ContentContainer>
        <StyledPhoneIcon>
          <PhoneIcon label={''} labelId={''} width={30} height={30} />
        </StyledPhoneIcon>
        <DurationText>
          Duration: {args.callDuration || 'N/A'}
        </DurationText>
      </ContentContainer>
    </WidgetContent>
  </Widget>
);

export const MissedCallWidget = args => (
  <Widget {...args}>
    <WidgetHeader>Missed Call</WidgetHeader>
    <WidgetContent>
      {/* Icon und Button in einem flexiblen Layout */}
      <ContentContainer>
        <StyledPhoneIcon>
          <PhoneSlashIcon label={''} labelId={''} width={30} height={30} />
        </StyledPhoneIcon>
        <Button variation={ButtonVariations.Option}>
          Call Back
        </Button>
      </ContentContainer>
    </WidgetContent>
  </Widget>
);

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between; /* Abstand zwischen Icon und Text/Button */
  width: 100%; /* Sorgt dafür, dass die Elemente die komplette Breite nutzen */
  gap: ${tokens.spacing.small};
`;

const StyledPhoneIcon = styled.div`
  color: ${({ theme }) => theme.color.text.primary};
`;

const DurationText = styled(Text)`
  font-size: ${TextTypes};
  color: ${({ theme }) => theme.color.text.primary};
`;
