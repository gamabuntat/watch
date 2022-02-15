import styled from 'styled-components';

import Button from 'components/Button/index';

export const Stopwatch = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: min-content;
`;

export const Controls = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(clamp(33.3333%, (375px - 100%) * 999, 100%), 1fr)
  );
  width: 100%;
`;

export const Control = styled(Button)`
  padding: .3rem 0;
  font-size: clamp(12px, 5vw, 30px);
  border-width: clamp(5px, 1.8vw, 10px);
`;
