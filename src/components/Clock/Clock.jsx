import { useEffect, useRef, useState } from 'react';

import ClockFace from 'components/ClockFace/index';

const Clock = () => {
  const getTime = () => new Date().toLocaleTimeString([], { hour12: false });
  const [time, setTime] = useState(getTime());
  const timer = useRef(0);

  useEffect(() => {
    timer.current = setInterval(() => setTime(getTime()), 1000);

    return () => {
      clearInterval(timer.current);
    };
  }, []);

  return <ClockFace>{time}</ClockFace>
};

export default Clock;
