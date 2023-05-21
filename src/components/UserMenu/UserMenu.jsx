import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';
import * as S from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { email: userEmail } = useSelector(selectUser);

  const handleClick = () => {
    dispatch(logOut());
  };

  return (
    <S.Container>
      <S.Email>{userEmail}</S.Email>
      <S.Logout type="button" onClick={handleClick}>
        <S.Thumb>
          <S.LogoutIcon />
        </S.Thumb>
        Log out
      </S.Logout>
    </S.Container>
  );
};
