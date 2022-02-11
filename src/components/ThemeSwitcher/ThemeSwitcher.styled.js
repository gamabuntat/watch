import styled from 'styled-components';

export const ThemeSwitcher = styled.label``;

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  margin: 0;
  outline: none;
  appearance: none;
`;

const trackWidth = 68;
const trackHeight = 38;
const trackPadding = 8;
const iconFontSize = 21;
const thumbSize = 26;

export const Track = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${trackWidth}px;
  height: ${trackHeight}px;
  padding: ${trackPadding}px;
  background-color: white;
  border-radius: ${trackHeight}px;
  cursor: pointer;
  box-shadow: 0 0 4px 0 ${({ theme }) => theme.fg} inset;

  ${Checkbox}:checked + & {
    box-shadow: 0 0 20px 0 ${({ theme }) => theme.fg};
  }
`;

export const Thumb = styled.span`
  position: absolute;
  top: calc(50% - ${thumbSize}px / 2);
  left: calc(${trackPadding}px - 1%);
  width: ${thumbSize}px;
  height: ${thumbSize}px;
  background-color: ${({ theme }) => theme.btnBg};
  transition: all 0.3s ease-out;
  border-radius: 50%;
  border: 1px solid rgba(27, 31, 36, 0.15);

  ${Checkbox}:focus-visible + ${Track} > & {
    box-shadow: ${({ theme }) => theme.btnFocusShadow};
  }

  ${Checkbox}:checked + ${Track} > & {
    left: calc(100% - ${thumbSize}px - ${trackPadding}px + 1%);
  }

  @media (prefers-reduced-motion: reduce) {
    & {
      transition: none;
    }
  }
`;

export const Icon = styled.span`
  font-size: ${iconFontSize}px;
  user-select: none;
`;
