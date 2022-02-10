import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import Stopwatch from 'components/Stopwatch/index';
import ThemeSwitcher from 'components/ThemeSwitcher/index';
import commonTheme from 'constants/commonTheme';
import lightTheme from 'constants/lightTheme';
import darkTheme from 'constants/darkTheme';

import StyledApp from './App.style';

const App = () => {
  const themes = [lightTheme, darkTheme];
  const [isDark, toggleDarkMode] = useState(false);

  return (
    <ThemeProvider theme={{ ...commonTheme, ...themes[Number(isDark)] }}>
      <StyledApp>
        <ThemeSwitcher
          checked={isDark}
          onChange={() => toggleDarkMode(!isDark)}
        />
        <Stopwatch />
      </StyledApp>
    </ThemeProvider>
  );
};

export default App;
