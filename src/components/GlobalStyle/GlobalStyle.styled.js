import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

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
  }
`;

export default GlobalStyle;
