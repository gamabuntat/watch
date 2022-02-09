import S from './ThemeSwitcher.style';

const ThemeSwitcher = (props) => {
  return (
    <label
      role="checkbox"
      aria-checked={props.checked}
      aria-label="theme switcher"
    >
      <S.Input {...props} />
      <S.Track>
        <S.Thumb />
        <S.Icon>🌞</S.Icon>
        <S.Icon>🌚</S.Icon>
      </S.Track>
    </label>
  );
};

export default ThemeSwitcher;
