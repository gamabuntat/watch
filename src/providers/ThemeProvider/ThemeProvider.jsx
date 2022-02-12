import { useEffect, useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

const ThemeProvider = ({ children, themes }) => {
  const [isDark, toggleTheme] = useState(false);
  const getTheme = () => themes[Number(isDark)];

  useEffect(() => {
    document.head
      .querySelector('meta[name="theme-color"]')
      .setAttribute('content', getTheme().bg);
  });

  return (
    <StyledThemeProvider
      theme={{ ...getTheme(), toggleTheme: () => toggleTheme(!isDark) }}
    >
      {children}
    </StyledThemeProvider>
  );
};

export default ThemeProvider;
