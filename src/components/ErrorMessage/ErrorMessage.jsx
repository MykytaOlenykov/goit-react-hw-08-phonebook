import PropTypes from 'prop-types';
import * as S from './ErrorMessage.styled';

export const ErrorMessage = ({ errorText }) => (
  <S.ErrorText>{errorText}</S.ErrorText>
);

ErrorMessage.propTypes = {
  errorText: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
