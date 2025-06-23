import React from 'react';
import { ToolTip, Button, QuestionIcon} from '@a-little-world/little-world-design-system-native';
import { ButtonVariations } from '@a-little-world/little-world-design-system-core';

export default {
  component: ToolTip,
  title: 'Components/ToolTip',
  // argTypes: {
  //   open: { control: 'boolean' },
  //   text: { control: 'text' },
  //   side: { control: 'select', options: ['top', 'left', 'right', 'bottom'] },
  // },
};

export const Default = args => {
  return (
    <ToolTip
      trigger={
        <Button variation={ButtonVariations.Icon}>
          <QuestionIcon label="questionIcon" />
        </Button>
      }
      {...args}
    />
  );
};

Default.args = {
  text: 'Ein Avatar ist ein gezeichnetes Profilbild, das du an Stelle eines echten Fotos von dir verwenden kannst. Um den Avatar dir ähnlich aussehen zu lassen, kannst du Merkmale wie Geschlecht, Nase, Haare, Augen etc. anpassen. Probier es doch einfach mal aus! Deinen Avatar kannst du später jederzeit wieder ändern.',
};
