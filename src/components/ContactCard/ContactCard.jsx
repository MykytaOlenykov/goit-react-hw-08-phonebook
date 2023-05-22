import { useState } from 'react';
import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'redux/contacts/slice';
import { Modal } from 'components/Modal';
import * as S from './ContactCard.styled';

export const ContactCard = ({ contactId, name, number }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleDeleteContact = async contactId => {
    await deleteContact(contactId);
  };

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
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
            onClick={() => handleDeleteContact(contactId)}
            disabled={isDeleting}
            className="delete"
          >
            <S.DeleteIcon />
            Delete
          </S.Button>
        </li>
        <li>
          <S.Button type="button" className="edit" onClick={handleOpenModal}>
            <S.EditIcon />
            Edit
          </S.Button>
        </li>
      </S.List>
      {isOpenModal && (
        <Modal
          id={contactId}
          name={name}
          number={number}
          onCloseModal={handleCloseModal}
        />
      )}
    </S.ContactCard>
  );
};

ContactCard.propTypes = {
  contactId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
