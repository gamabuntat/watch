import styled from 'styled-components';

export const Slider = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  align-self: stretch;
  overflow-x: clip;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  min-width: calc(100% * 2);
  touch-action: none;
`;

export const Item = styled.div`
  display: flex;
  justify-content: center;
  width: calc(100% / 2);
`;
