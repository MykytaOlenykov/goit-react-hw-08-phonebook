import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { selectIsLoading, selectVisibleContacts } from 'redux/selectors';
import * as S from './ContactList.styled';

export const ContactList = () => {
  const isLoading = useSelector(selectIsLoading);
  const visibleContacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <S.List>
      {visibleContacts.map(({ id, name, number }) => (
        <S.Item key={id}>
          <p>
            {name}: {number}
          </p>
          <S.Button
            type="button"
            onClick={() => handleDelete(id)}
            disabled={isLoading}
          >
            Delete
          </S.Button>
        </S.Item>
      ))}
    </S.List>
  );
};
