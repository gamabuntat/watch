import hexToRgba from 'utils/hexToRgba';

const activeColor = '#ffd11a';

const darkTheme = {
  fg: '#D0D0D0',
  bg: '#121212',
  btnFocusShadow: `0 0 0 3px ${hexToRgba(activeColor, 0.6)}`,
  btnBorderLight: '#767676',
  btnBorderDark: '#212121',
  activeColor,
};

export default darkTheme;
