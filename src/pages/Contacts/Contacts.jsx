import { AddContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList';
import * as S from './Contacts.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from 'redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { PageLoader } from 'components/Loader';

const Contacts = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (isLoading) {
    return <PageLoader />;
  }

  if (error) {
    return (
      <S.Section>
        <S.ErrorText>
          Technical work is in progress. We apologize for the temporary
          inconvenience.
        </S.ErrorText>
      </S.Section>
    );
  }

  return (
    <S.Section>
      <S.SectionTitle>Phonebook</S.SectionTitle>

      <AddContactForm contacts={contacts} />

      <S.ContactsContainer>
        <S.TextBox>
          <S.Title>Contacts</S.Title>
        </S.TextBox>

        <Filter />
        {contacts.length ? (
          <ContactList />
        ) : (
          <S.Text>
            You don't have any contacts. Add contacts for them to appear here.
          </S.Text>
        )}
      </S.ContactsContainer>
    </S.Section>
  );
};

export default Contacts;
