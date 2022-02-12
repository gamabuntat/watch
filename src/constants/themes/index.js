import commonTheme from './commonTheme';
import lightTheme from './lightTheme';
import darkTheme from './darkTheme';

const themes = [lightTheme, darkTheme].map((theme, idx) => ({
  isDark: Boolean(idx),
  ...commonTheme,
  ...theme,
}));

export default themes;
