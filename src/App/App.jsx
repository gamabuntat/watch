import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from 'components/GlobalStyle/index';
import Stopwatch from 'components/Stopwatch/index';
import ThemeSwitcher from 'components/ThemeSwitcher/index';
import commonTheme from 'constants/commonTheme';
import lightTheme from 'constants/lightTheme';
import darkTheme from 'constants/darkTheme';

import StyledApp from './App.style';

const App = () => {
  const themes = [lightTheme, darkTheme].map((thm) => ({
    ...commonTheme,
    ...thm,
  }));
  const [isDark, toggleDarkMode] = useState(false);

  return (
    <ThemeProvider theme={themes[Number(isDark)]}>
      <>
        <GlobalStyle />
        <StyledApp>
          <ThemeSwitcher
            checked={isDark}
            onChange={() => toggleDarkMode(!isDark)}
          />
          <Stopwatch />
        </StyledApp>
      </>
    </ThemeProvider>
  );
};

export default App;
