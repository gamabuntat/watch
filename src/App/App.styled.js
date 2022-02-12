import styled from 'styled-components';

export const App = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 1rem;
  margin: 0 auto;
  padding: 1rem 0;
  width: max-content;
  min-height: 100vh;
  height: 1px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: flex-end;
  flex-basis: 20vh;
`;

export const Main = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
`;

export const Footer = styled.footer`
`;
