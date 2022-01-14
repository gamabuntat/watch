const formatSecInTime = (sec) =>
  [Math.floor(sec / 60 ** 2), Math.floor(sec / 60) % 60, sec % 60]
    .reduce((acc, part) => `${acc}:${part < 10 ? 0 : ''}${part}`, '')
    .replace(/^:/, '');

export default formatSecInTime;
