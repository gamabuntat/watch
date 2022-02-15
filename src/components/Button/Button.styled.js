import styled from 'styled-components';

const Control = styled.button.attrs({ type: 'button' })`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  font-family: inherit;
  background-color: transparent;
  color: inherit;
  cursor: pointer;
  border-top-color: ${({ theme }) => theme.btnBorderLight};
  border-left-color: ${({ theme }) => theme.btnBorderLight};
  border-bottom-color: ${({ theme }) => theme.btnBorderDark};
  border-right-color: ${({ theme }) => theme.btnBorderDark};

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.activeColor};
    z-index: 1;
  }

  &:active {
    border-top-color: ${({ theme }) => theme.btnBorderDark};
    border-left-color: ${({ theme }) => theme.btnBorderDark};
    border-bottom-color: ${({ theme }) => theme.btnBorderLight};
    border-right-color: ${({ theme }) => theme.btnBorderLight};
  }
`;

export default Control;
