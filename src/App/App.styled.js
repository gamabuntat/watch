import styled from 'styled-components';

export const App = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 16vh;
  margin: 0 auto;
  padding: 1rem 0;
  width: max-content;
  min-height: 100vh;
  height: 1px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: flex-end;
`;

export const Main = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  padding-bottom: 1rem;
`;
