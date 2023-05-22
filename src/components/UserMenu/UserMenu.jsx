import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { BtnLoader } from 'components/BtnLoader';
import * as S from './UserMenu.styled';

export const UserMenu = ({ className }) => {
  const dispatch = useDispatch();
  const { user, isLoading } = useAuth();

  const handleClick = () => {
    dispatch(logOut());
  };

  return (
    <S.Container className={className}>
      <S.Email>{user.email}</S.Email>
      <S.Logout type="button" onClick={handleClick} disabled={isLoading}>
        <S.Thumb>
          {isLoading ? (
            <BtnLoader width="15" height="15" color="#4FD1C5" />
          ) : (
            <S.LogoutIcon />
          )}
        </S.Thumb>
        Log out
      </S.Logout>
    </S.Container>
  );
};

UserMenu.propTypes = {
  className: PropTypes.string,
};
