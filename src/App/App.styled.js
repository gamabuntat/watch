import styled from 'styled-components';

import Button from 'components/Button/index';

export const App = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 1rem;
  margin: 0 auto;
  padding: 1rem 0 0;
  width: max-content;
  min-height: 100vh;
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
  display: flex;
  justify-content: center;
  padding-bottom: 1rem;
  min-height: 20vh;
`;

const navButtonSize = 'clamp(40px, 100%, 80px)';

export const Nav = styled.nav`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, ${navButtonSize});
  width: 100%;
  height: min-content;
`;

export const NavButton = styled(Button)`
  padding: 0.2em;
  border-width: clamp(6px, 3vw, 8px);
  fill: ${({ theme }) => theme.fg};
`;
