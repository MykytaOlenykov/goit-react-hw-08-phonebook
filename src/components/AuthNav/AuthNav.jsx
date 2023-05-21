import * as S from './AuthNav.styled';

export const AuthNav = () => (
  <S.List>
    <li>
      <S.Link to="/register">
        <S.Thumb>
          <S.SignUpIcon />
        </S.Thumb>
        Sign up
      </S.Link>
    </li>
    <li>
      <S.Link to="/login">
        <S.Thumb>
          <S.SignInIcon />
        </S.Thumb>
        Sign in
      </S.Link>
    </li>
  </S.List>
);
