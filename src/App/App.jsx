import Stopwatch from 'components/Stopwatch/index';
import ThemeSwitcher from 'components/ThemeSwitcher/index';
import { ClockIcon } from 'assets/index';

import * as S from './App.styled';

const App = () => {
  return (
    <S.App>
      <S.Header>
        <ThemeSwitcher />
      </S.Header>
      <S.Main>
        <Stopwatch />
      </S.Main>
      <S.Footer>
        <S.Nav>
          <S.NavButton>
            <ClockIcon />
          </S.NavButton>
          <S.NavButton>
            <ClockIcon />
          </S.NavButton>
          <S.NavButton>
            <ClockIcon />
          </S.NavButton>
        </S.Nav>
      </S.Footer>
    </S.App>
  );
};

export default App;
