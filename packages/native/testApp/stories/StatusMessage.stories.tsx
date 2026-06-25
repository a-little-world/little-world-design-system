import React from 'react';
import { View } from 'react-native';

import {
  Alert,
  FormMessage,
  StatusMessage,
} from '@a-little-world/little-world-design-system-native';
import { StatusTypes } from '@a-little-world/little-world-design-system-core';

export default {
  component: StatusMessage,
  title: 'Components/StatusMessage',
};

export const Error = () => (
  <StatusMessage visible type={StatusTypes.Error}>
    This is an error message to indicate something went wrong!
  </StatusMessage>
);

export const Success = () => (
  <StatusMessage visible type={StatusTypes.Success}>
    This is a success message to indicate something went right!
  </StatusMessage>
);

export const Warning = () => (
  <StatusMessage visible type={StatusTypes.Warning}>
    This is a warning message to indicate something went awry!
  </StatusMessage>
);

export const Info = () => (
  <StatusMessage visible type={StatusTypes.Info}>
    This is an info message to indicate some info.
  </StatusMessage>
);

export const WithBorder = () => (
  <View style={{ gap: 12 }}>
    <StatusMessage visible type={StatusTypes.Error} withBorder>
      Error with border and icon
    </StatusMessage>
    <StatusMessage visible type={StatusTypes.Warning} withBorder>
      Warning with border and icon
    </StatusMessage>
    <StatusMessage visible type={StatusTypes.Success} withBorder>
      Success with border
    </StatusMessage>
    <StatusMessage visible type={StatusTypes.Info} withBorder>
      Info with border
    </StatusMessage>
  </View>
);

export const AlertAlias = () => (
  <Alert visible type={StatusTypes.Error}>
    Alert — same as StatusMessage, clearer intent for banner notifications.
  </Alert>
);

export const FormMessageAlias = () => (
  <FormMessage visible type={StatusTypes.Error}>
    FormMessage — same as StatusMessage, clearer intent for inline form
    validation.
  </FormMessage>
);
