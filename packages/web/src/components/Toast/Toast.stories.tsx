import React from "react";
import { ToastBaseProps } from '@a-little-world/little-world-design-system-core'
import Button from "../Button/Button";
import { Logo } from "../Icon";
import Toast from "./Toast.tsx";
import { ToastProvider, ToastViewport } from "./styles.tsx";

export default {
  component: Toast,
  title: "Components/Toast",
};

export const Default = (args) => {
  const [open, setOpen] = React.useState(false);
  const timerRef = React.useRef(0);

  const props: ToastBaseProps = {
    icon: <Logo label={"ToastLogoIcon"} />,
    headline: "This is the headline",
    title: `This is the title`,
    description: "This is the description",
    timestamp: new Date().toLocaleTimeString(),
    actionText: "Click me",
    actionAltText: "Click me",
    duration: 3000,
    onClose: () => console.log("toast onClose"),
    onDismiss: () => console.log("toast onDismiss"),
    onClick: () => console.log("toast onClick"),
    onActionClick: () => {
      console.log("toast onActionClick");
    },
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
  href: "www.little-world.com",
};
