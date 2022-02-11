const formatMsInTime = (ms) =>
  `${[ms / 1000 / 60 ** 2, (ms / 1000 / 60) % 60, (ms / 1000) % 60]
    .map(Math.floor)
    .reduce((acc, part) => `${acc}:${part < 10 ? 0 : ''}${part}`, '')
    .replace(/^:/, '')}.${(ms / 100) % 10}`;

export default formatMsInTime;
