import { useTheme } from 'styled-components';

import * as S from './ThemeSwitcher.styled';

const ThemeSwitcher = () => {
  const { toggleTheme, isDark } = useTheme();

  return (
    <S.ThemeSwitcher>
      <S.Checkbox checked={isDark} onChange={toggleTheme} />
      <S.Thumb />
      <S.Icon role="img" aria-label="light theme">
        🌞
      </S.Icon>
      <S.Icon role="img" aria-label="dark theme">
        🌚
      </S.Icon>
    </S.ThemeSwitcher>
  );
};

export default ThemeSwitcher;
