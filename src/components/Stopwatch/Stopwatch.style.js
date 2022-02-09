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
    color: ${(props) => props.theme.fg};
  `,
  Controls: styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(
      auto-fit,
      minmax(clamp(33.3333%, (375px - 100%) * 999, 100%), 1fr)
    );
  `,
  Control: styled.button`
    padding: 10px;
    font-family: monospace;
    font-size: clamp(20px, 5vw, 30px);
    border-width: clamp(5px, 0.8vw, 10px);
    background-color: #ffffff00;
    color: white;
    cursor: pointer;
    outline: none;

    &:focus-visible {
      color: #ffcc00;
    }
  `,
};

export default Stopwatch;
