import { useEffect, useRef, useState } from 'react';

import formatMsInTime from 'utils/formatMsInTime';
import ClockFace from 'components/ClockFace/index';

import * as S from './Stopwatch.styled';

const Stopwatch = () => {
  const [isStart, toggleStart] = useState(false);
  const [ms, setMs] = useState(0);
  const timer = useRef(0);

  useEffect(() => {
    if (isStart) {
      timer.current = setInterval(() => setMs((ms) => ms + 100), 100);
    }

    return () => {
      clearTimeout(timer.current);
    };
  }, [isStart]);

  return (
    <S.Stopwatch>
      <ClockFace>{formatMsInTime(ms)}</ClockFace>
      <S.Controls>
        <S.Control
          aria-label="start"
          onClick={() => toggleStart(true)}
          tabIndex={'initial'}
        >
          start
        </S.Control>
        <S.Control aria-label="reset" onClick={() => setMs(0)}>
          reset
        </S.Control>
        <S.Control aria-label="stop" onClick={() => toggleStart(false)}>
          stop
        </S.Control>
      </S.Controls>
    </S.Stopwatch>
  );
};

export default Stopwatch;
