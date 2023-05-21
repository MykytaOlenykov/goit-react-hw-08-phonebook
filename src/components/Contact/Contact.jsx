import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'redux/contactsSlice';
import { ButtonLoader } from 'components/Loaders';
import { ErrorMessage } from 'components/ErrorMessage';
import * as S from './Contact.styled';

export const Contact = ({ contactId, name, number }) => {
  const [deleteContact, { isLoading: isDeleting, isError, error }] =
    useDeleteContactMutation();

  const handleDelete = async contactId => {
    await deleteContact(contactId);
  };

  return (
    <S.ContactCard>
      <p>
        {name}: {number}
      </p>
      <S.Button
        type="button"
        onClick={() => handleDelete(contactId)}
        disabled={isDeleting}
      >
        {isDeleting && <ButtonLoader />} Delete
      </S.Button>
      {isError && <ErrorMessage errorText={`Error: ${error.status}`} />}
    </S.ContactCard>
  );
};

Contact.propTypes = {
  contactId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
