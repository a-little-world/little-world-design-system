// @ts-nocheck
import React, { ReactNode } from "react";
import "@testing-library/dom/node_modules/pretty-format";
import "@testing-library/jest-dom/extend-expect";
import {
  render as defaultRender,
  RenderOptions,
  RenderResult,
} from "@testing-library/react";
import userEvent, { UserEvent } from "@testing-library/user-event";
import { ThemeProvider } from "styled-components";
import { themes } from "./theme";

interface CustomRenderOptions extends Omit<RenderOptions, "wrapper"> {
  wrapper?: React.ComponentType<{ children: ReactNode }>;
  router?: unknown;
  mocks?: unknown[];
}

function render(
  ui: ReactNode,
  {
    wrapper: CustomWrapper,
    router,
    mocks = [],
    ...options
  }: CustomRenderOptions = {}
): RenderResult {
  const Wrapper =
    CustomWrapper ||
    (({ children }: { children: ReactNode }) => (
      <ThemeProvider theme={themes.light}>{children}</ThemeProvider>
    ));

  return defaultRender(ui, { wrapper: Wrapper, ...options });
}

function renderWithUser(
  ui: ReactNode,
  options?: CustomRenderOptions
): RenderResult & { user: UserEvent } {
  return {
    user: userEvent.setup(),
    ...render(ui, options),
  };
}

// Re-export everything
export * from "@testing-library/react";
export { render, renderWithUser };
