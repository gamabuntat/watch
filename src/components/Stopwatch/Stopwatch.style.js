import styled from 'styled-components';

const Stopwatch = {
  Main: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  ClockFace: styled.span`
    font-family: GohuFont, monospace;
    font-size: min(20vw, 100px);
    color: ${({ theme }) => theme.fg};
  `,
  Controls: styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(
      auto-fit,
      minmax(clamp(33.3333%, (375px - 100%) * 999, 100%), 1fr)
    );
  `,
  Control: styled.button.attrs({ type: 'button' })`
    padding: 10px;
    font-family: monospace;
    font-size: clamp(20px, 5vw, 30px);
    border-width: clamp(5px, 0.8vw, 10px);
    background-color: transparent;
    color: ${({ theme }) => theme.fg};
    cursor: pointer;
    border-top-color: ${({ theme }) => theme.btnBorderLight};
    border-left-color: ${({ theme }) => theme.btnBorderLight};
    border-bottom-color: ${({ theme }) => theme.btnBorderDark};
    border-right-color: ${({ theme }) => theme.btnBorderDark};

    &:focus-visible {
      outline: 2px solid ${({ theme }) => theme.activeColor};
      z-index: 1;
    }

    &:active {
      border-top-color: ${({ theme }) => theme.btnBorderDark};
      border-left-color: ${({ theme }) => theme.btnBorderDark};
      border-bottom-color: ${({ theme }) => theme.btnBorderLight};
      border-right-color: ${({ theme }) => theme.btnBorderLight};
    }
  `,
};

export default Stopwatch;
