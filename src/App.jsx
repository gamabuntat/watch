import styled from 'styled-components';

import Stopwatch from 'components/Stopwatch/Stopwatch';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: black;
`;

const App = () => {
  return (
    <Main>
      <Stopwatch />
    </Main>
  );
};

export default App;
