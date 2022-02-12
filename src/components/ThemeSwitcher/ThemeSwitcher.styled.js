import styled from 'styled-components';

const width = 68;
const height = 38;
const padding = 8;
const iconFontSize = 21;
const thumbSize = 26;

export const ThemeSwitcher = styled.label`
  align-self: flex-end;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: clamp(
    ${width}px,
    calc((${width}px - min(100% - ${width}px / 2, ${width}px)) * 999),
    100%
  );
  height: ${height}px;
  padding: ${padding}px;
  background-color: white;
  border-radius: ${height}px;
  cursor: pointer;
  box-shadow: ${({ theme }) =>
    theme.isDark ? `0 0 20px 0 ${theme.fg}` : `0 0 4px 0 ${theme.fg} inset`};
`;

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  margin: 0;
  outline: none;
  appearance: none;
`;

export const Thumb = styled.span`
  position: absolute;
  top: calc(50% - ${thumbSize}px / 2);
  left: calc(${padding}px - 1%);
  width: ${thumbSize}px;
  height: ${thumbSize}px;
  background-color: ${({ theme }) => theme.btnBg};
  transition: all 0.3s ease-out;
  border-radius: 50%;
  border: 1px solid rgba(27, 31, 36, 0.15);

  ${Checkbox}:focus-visible + && {
      box-shadow: ${({ theme }) => theme.btnFocusShadow};
  }

  ${Checkbox}:checked + & {
    left: calc(100% - ${thumbSize}px - ${padding}px + 1%);
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
