import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import PropTypes from 'prop-types';
import { clearError } from 'redux/auth/slice';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Loader } from 'components/Loader';
import * as S from './UserMenu.styled';

export const UserMenu = ({ className }) => {
  const dispatch = useDispatch();
  const { user, isLoading, error } = useAuth();

  useEffect(() => {
    if (error) {
      toast.error('Something went wrong, please try again later.');
      dispatch(clearError());
    }
  }, [error, dispatch]);

  const handleClick = () => {
    dispatch(logOut());
  };

  return (
    <S.Container className={className}>
      <S.Email>{user.email}</S.Email>
      <S.Logout type="button" onClick={handleClick} disabled={isLoading}>
        <S.Thumb>
          {isLoading ? (
            <Loader width="15" height="15" color="#4FD1C5" />
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
