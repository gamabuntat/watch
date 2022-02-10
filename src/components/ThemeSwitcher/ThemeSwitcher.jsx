import S from './ThemeSwitcher.style';

const ThemeSwitcher = (props) => {
  return (
    <label>
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
    </label>
  );
};

export default ThemeSwitcher;
