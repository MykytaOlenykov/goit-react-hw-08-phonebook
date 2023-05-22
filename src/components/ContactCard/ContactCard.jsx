import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'redux/contacts/slice';
import * as S from './ContactCard.styled';

export const ContactCard = ({ contactId, name, number }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  const handleDelete = async contactId => {
    await deleteContact(contactId);
  };

  return (
    <S.ContactCard>
      <S.Name>{name}</S.Name>
      <S.Number>
        Phone number:
        <span>{number}</span>
      </S.Number>

      <S.List>
        <li>
          <S.Button
            type="button"
            onClick={() => handleDelete(contactId)}
            disabled={isDeleting}
            className="delete"
          >
            <S.DeleteIcon />
            Delete
          </S.Button>
        </li>
        <li>
          <S.Button type="button" className="edit">
            <S.EditIcon />
            Edit
          </S.Button>
        </li>
      </S.List>
    </S.ContactCard>
  );
};

ContactCard.propTypes = {
  contactId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
