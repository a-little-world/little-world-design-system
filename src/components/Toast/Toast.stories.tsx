import React from 'react';

import Button, { ButtonVariations } from '../Button/Button';
import { Logo } from '../Icon';
import Toast, { ToastProps } from './Toast';
import { ToastProvider, ToastViewport } from './styles';

export default {
  component: Toast,
  title: 'Components/Toast',
};

export const Default = args => {
  const [open, setOpen] = React.useState(false);
  const timerRef = React.useRef(0);

  const props: ToastProps = {
    icon: <Logo label={'ToastLogoIcon'} labelId={'ToastLogoIcon'} />,
    headline: 'This is the headline',
    title: `This is the title`,
    description: 'This is the description',
    timestamp: new Date().toLocaleTimeString(),
    actionNode: (
      <Button
        variation={ButtonVariations.Basic}
        onClick={e => {
          e.stopPropagation();
          console.log('toast custom action');
        }}
      >
        Action
      </Button>
    ),
    actionAltText: 'Action',
    duration: 3000,
    onClose: () => console.log('toast onClose'),
    onDismiss: () => console.log('toas onDismiss'),
    onClick: () => console.log('toast onClick'),
  };

  const showToast = () => {
    setOpen(false);
    window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => {
      setOpen(true);
    }, 100);
  };

  return (
    <>
      <Button onClick={() => showToast()}>Show Toast</Button>
      <ToastProvider swipeDirection="right">
        <ToastViewport />
        {open && <Toast {...props}></Toast>}
      </ToastProvider>
    </>
  );
};

Default.args = {
  href: 'www.little-world.com',
};
