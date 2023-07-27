import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { ContactCard } from 'components/ContactCard';
import * as S from './ContactList.styled';
import { selectVisibleContacts } from 'redux/contacts/selectors';

export const ContactList = ({ contacts }) => {
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <S.List>
      {visibleContacts.map(({ id, name, number }) => (
        <S.Item key={id}>
          <ContactCard contactId={id} name={name} number={number} />
        </S.Item>
      ))}
    </S.List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
