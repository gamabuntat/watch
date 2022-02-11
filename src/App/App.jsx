import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from 'components/GlobalStyle/index';
import Stopwatch from 'components/Stopwatch/index';
import ThemeSwitcher from 'components/ThemeSwitcher/index';
import commonTheme from 'constants/commonTheme';
import lightTheme from 'constants/lightTheme';
import darkTheme from 'constants/darkTheme';

import * as S from './App.styled';

const App = () => {
  const themes = [lightTheme, darkTheme].map((thm) => ({
    ...commonTheme,
    ...thm,
  }));
  const [isDark, toggleDarkMode] = useState(false);

  return (
    <ThemeProvider theme={themes[Number(isDark)]}>
      <S.App>
        <GlobalStyle />
        <S.Header>
          <ThemeSwitcher
            checked={isDark}
            onChange={() => toggleDarkMode(!isDark)}
          />
        </S.Header>
        <S.Main>
          <Stopwatch />
        </S.Main>
      </S.App>
    </ThemeProvider>
  );
};

export default App;
