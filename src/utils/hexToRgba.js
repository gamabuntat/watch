const hexToRgba = (hex, alpha) => {
  const hwh = hex.replace(/#/, '');
  const chex = hwh.slice(0, 6);
  const calpha = alpha ?? parseInt(hwh.slice(6), 16) / 255;

  return `rgba(${(chex.length < 6
    ? chex.slice(0, 3).replace(/(.)/g, '$1$1')
    : chex
  )
    .split(/(?=(?:..)*$)/)
    .concat(['00', '00', '00'])
    .slice(0, 3)
    .reduce((res, v) => `${res}, ${parseInt(v, 16)}`, '')
    .replace(/^,\s/, '')}, ${isNaN(calpha) ? 1 : calpha})`;
};

export default hexToRgba;
