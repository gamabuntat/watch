import { useEffect, useRef, useState } from 'react';

import s from './App.module.css';
import formatSecInTime from './formatSecInTime';

const App = () => {
  const [isStart, toggleStart] = useState(false);
  const [sec, setSec] = useState(0);
  const timer = useRef(0);

  useEffect(() => {
    if (isStart) {
      timer.current = setTimeout(() => setSec(sec + 1), 1000);
    }

    return () => clearTimeout(timer.current);
  });

  return (
    <div className={s.App}>
      <div className={s.Stopwatch}>
        <span className={s.Watch}>{formatSecInTime(sec)}</span>
        <div className={s.Controls}>
          <button
            aria-label="start"
            className={s.Control}
            onClick={() => toggleStart(true)}
          >
            start
          </button>
          <button
            aria-label="reset"
            className={s.Control}
            onClick={() => setSec(0)}
          >
            reset
          </button>
          <button
            aria-label="stop"
            className={s.Control}
            onClick={() => toggleStart(false)}
          >
            stop
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
