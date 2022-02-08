import { useEffect, useRef, useState } from 'react';

import formatSecInTime from 'utils/formatSecInTime';

import S from './Stopwatch.style';

const Stopwatch = () => {
  const [isStart, toggleStart] = useState(false);
  const [sec, setSec] = useState(0);
  const timer = useRef(0);

  useEffect(() => {
    if (isStart) {
      timer.current = setTimeout(() => setSec(sec + 1), 1000);
    }

    return () => {
      clearTimeout(timer.current);
    };
  });

  return (
    <S.Main>
      <S.ClockFace>{formatSecInTime(sec)}</S.ClockFace>
      <S.Controls>
        <S.Control
          type="button"
          aria-label="start"
          onClick={() => toggleStart(true)}
        >
          start
        </S.Control>
        <S.Control type="button" aria-label="reset" onClick={() => setSec(0)}>
          reset
        </S.Control>
        <S.Control
          type="button"
          aria-label="stop"
          onClick={() => toggleStart(false)}
        >
          stop
        </S.Control>
      </S.Controls>
    </S.Main>
  );
};

export default Stopwatch;
