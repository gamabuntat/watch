import styled from 'styled-components';

const Input = styled.input.attrs({ type: 'checkBox' })`
  position: absolute;
  margin: 0;
  appearance: none;
`;

const trackWidth = 56;
const trackHeight = 31;
const trackPadding = 5;
const thumbSize = trackHeight - trackPadding * 2;

const Track = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: ${trackWidth}px;
  height: ${trackHeight}px;
  padding: ${trackPadding}px;
  background-color: white;
  border-radius: ${trackHeight}px;
  cursor: pointer;
  box-shadow: 0 0 4px 0 ${({ theme }) => theme.fg} inset;

  ${Input}:checked + & {
    box-shadow: 0 0 4px 0 ${({ theme }) => theme.fg};
  }
`;

const Thumb = styled.span`
  position: absolute;
  top: ${trackPadding}px;
  left: ${trackPadding}px;
  width: ${thumbSize}px;
  height: ${thumbSize}px;
  background-color: ${({ theme }) => theme.btnBg};
  transition: all 0.3s ease-out;
  border-radius: 50%;
  border: 1px solid rgba(27, 31, 36, 0.15);

  ${Input}:focus-visible + ${Track} > & {
    box-shadow: ${({ theme }) => theme.btnFocusShadow};
  }

  ${Input}:checked + ${Track} > & {
    left: calc(100% - ${thumbSize}px - ${trackPadding}px);
  }
`;

const Icon = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

const ThemeSwitcher = {
  Track,
  Input,
  Thumb,
  Icon,
};

export default ThemeSwitcher;
