import Stopwatch from 'components/Stopwatch/index';
import ThemeSwitcher from 'components/ThemeSwitcher/index';

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
      <S.Footer>footer</S.Footer>
    </S.App>
  );
};

export default App;
