import { useState } from 'react';

import Slider from 'components/Slider/index';
import Clock from 'components/Clock/index';
import Stopwatch from 'components/Stopwatch/index';
import ThemeSwitcher from 'components/ThemeSwitcher/index';
import { ClockIcon } from 'assets/index';

import * as S from './App.styled';

const App = () => {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <S.App>
      <S.Header>
        <ThemeSwitcher />
      </S.Header>
      <S.Main>
        <Slider activeItem={activeItem} setActiveItem={setActiveItem}>
          <Clock />
          <Stopwatch />
        </Slider>
      </S.Main>
      <S.Footer>
        <S.Nav>
          <S.NavButton onClick={() => setActiveItem(0)}>
            <ClockIcon />
          </S.NavButton>
          <S.NavButton onClick={() => setActiveItem(1)}>
            <ClockIcon />
          </S.NavButton>
        </S.Nav>
      </S.Footer>
    </S.App>
  );
};

export default App;
