// globalStyles.js
import { createGlobalStyle } from 'styled-components';

import { ThemeWeb } from '@a-little-world/little-world-design-system-core';

const GlobalStyle = createGlobalStyle<{ theme: ThemeWeb }>`
  html {
    background: ${({ theme }) => theme.color.surface.background};
  }  

  body {
    padding: 0;
    margin: 0;
    font-size: 16px;
    overflow-x: hidden;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${({ theme }) => theme.color.text.primary};
    background: ${({ theme }) => theme.color.surface.background};
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  button {
    cursor: pointer;
    padding: 0;
    background: none;
    border: none;
    font-size: 1rem;
  }

  p {
    margin: 0;
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 0;
    font-weight: normal;
  }

  ul {
    margin-block-end: 0;
    margin-block-start: 0;
    list-style-type: none;
    padding-inline-start: 0;
  }

  * {
    box-sizing: border-box;
  }

  ::placeholder {
    color: ${({ theme }) => theme.color.text.tertiary};
  }
`;

export default GlobalStyle;
