import { useEffect, useLayoutEffect, useRef, useState } from 'react';

import * as S from './Slider.styled';

const Slider = ({ children, activeItem, setActiveItem }) => {
  const [isMoving, toggleMoving] = useState(false);
  const [isHidden, toggleHidden] = useState(true);
  // const [isSmooth, toggleSmooth] = useState(true);
  const isSmooth = useRef(true);
  const [position, setPosition] = useState(0);
  const offset = useRef(0);
  const slider = useRef(null);
  const timer = useRef(0);
  const transitionMs = 300;

  const onPointerDown = (e) => {
    setPosition(activeItem);
    e.target.setPointerCapture(e.pointerId);
    offset.current = e.clientX;
    toggleMoving(true);
    toggleHidden(false);
    // toggleSmooth(false);
    isSmooth.current = false;
  };

  const onPointerMove = (e) => {
    if (isMoving) {
      setPosition(
        Math.max(
          Math.min(
            activeItem -
              (e.clientX - offset.current) /
                slider.current.getBoundingClientRect().width,
            children.length - 1
          ),
          0
        )
      );
    }
  };

  const onLostPointerCapture = () => {
    isSmooth.current = true;
    // toggleSmooth(true);
    toggleMoving(false);
    setActiveItem(Math.round(position));
  };

  useLayoutEffect(() => {
    toggleHidden(false);
  }, [activeItem]);

  useEffect(() => {
    timer.current = setTimeout(() => {
      if (!isMoving) {
        toggleHidden(true);
      }
    }, transitionMs);

    return () => {
      clearTimeout(timer.current);
    };
  }, [isMoving, activeItem]);

  return (
    <S.Slider
      ref={slider}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onLostPointerCapture={onLostPointerCapture}
    >
      <S.Container
        style={{
          left: `-${(isMoving ? position : activeItem) * 100}%`,
          transition: `${
            isSmooth.current ? `all ${transitionMs / 1000}s` : 'unset'
          }`,
        }}
      >
        {children.map((child, idx) => (
          <S.Item
            style={{
              visibility: `${
                idx !== activeItem && isHidden ? 'hidden' : 'initial'
              }`,
            }}
          >
            {child}
          </S.Item>
        ))}
      </S.Container>
    </S.Slider>
  );
};

export default Slider;
