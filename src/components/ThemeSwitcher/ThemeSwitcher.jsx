import * as S from './ThemeSwitcher.styled';

const ThemeSwitcher = (props) => {
  return (
    <S.ThemeSwitcher>
      <S.Checkbox {...props} />
      <S.Track>
        <S.Thumb />
        <S.Icon role="img" aria-label="light theme">
          🌞
        </S.Icon>
        <S.Icon role="img" aria-label="dark theme">
          🌚
        </S.Icon>
      </S.Track>
    </S.ThemeSwitcher>
  );
};

export default ThemeSwitcher;
