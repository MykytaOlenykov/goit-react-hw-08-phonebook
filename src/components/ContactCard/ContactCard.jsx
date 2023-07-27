import { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { clearError } from 'redux/contacts/slice';
import { Modal } from 'components/Modal';
import * as S from './ContactCard.styled';
import { selectError } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';

export const ContactCard = ({ contactId, name, number }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      toast.error(
        'Something went wrong while deleting a contact, please try again later.'
      );
      dispatch(clearError());
    }
  }, [error, dispatch]);

  const handleDeleteContact = async contactId => {
    setIsDeleting(true);
    await dispatch(deleteContact(contactId));
    setIsDeleting(false);
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
