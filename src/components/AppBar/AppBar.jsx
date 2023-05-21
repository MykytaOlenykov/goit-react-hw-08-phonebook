import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { Navigation } from 'components/Navigation';
import { UserMenu } from 'components/UserMenu';
import { AuthNav } from 'components/AuthNav';
import * as S from './AppBar.styled';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <S.Header>
      <Navigation />

      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </S.Header>
  );
};
