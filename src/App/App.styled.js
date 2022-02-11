import styled from 'styled-components';

export const App = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 1rem;
  padding: 1rem 0;
  min-height: 100vh;
  height: 1px;
`;

export const Header = styled.header`
  display: flex;
  flex-basis: 30%
  justify-content: center;
`;

export const Main = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  padding-bottom: 1rem;
`;
