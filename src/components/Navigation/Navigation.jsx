import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import * as S from './Navigation.styled';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <S.List>
        <li>
          <S.Link to="/">
            <S.Thumb>
              <S.HomeIcon />
            </S.Thumb>
            Home
          </S.Link>
        </li>
        {isLoggedIn && (
          <li>
            <S.Link to="/contacts">
              <S.Thumb>
                <S.ContactsIcon />
              </S.Thumb>
              Contacts
            </S.Link>
          </li>
        )}
      </S.List>
    </nav>
  );
};
