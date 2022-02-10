import hexToRgba from 'utils/hexToRgba';

const activeColor = '#0969da';

const commonTheme = {
  btnBg: '#d9d9d9',
  btnFocusShadow: `0 0 0 2px ${hexToRgba(activeColor, 0.3)}`,
  activeColor,
};

export default commonTheme;
