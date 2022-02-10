import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    font-family: GohuFont, -apple-system, BlinkMacSystemFont, 
      'Segoe UI', 'Roboto Mono', monospace;
    font-size: 17px;
    color: ${({ theme }) => theme.fg};
    background-color: ${({ theme }) => theme.bg};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
