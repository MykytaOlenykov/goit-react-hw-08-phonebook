import { useFetchContactsQuery } from 'redux/contacts/slice';
import { AddContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList';
import { Loader } from 'components/Loader';
import * as S from './Contacts.styled';

const Contacts = () => {
  const { data, isSuccess, isFetching } = useFetchContactsQuery();

  return (
    <S.Section>
      <S.SectionTitle>Phonebook</S.SectionTitle>

      <AddContactForm contacts={data} />

      <S.ContactsContainer>
        <S.TextBox>
          <S.Title>Contacts</S.Title>
          {isFetching && <Loader width="20" height="20" color="#4FD1C5" />}
        </S.TextBox>

        <Filter />
        {isSuccess && data.length ? (
          <ContactList contacts={data} />
        ) : (
          <S.Text>This page is empty, add some contacts.</S.Text>
        )}
      </S.ContactsContainer>
    </S.Section>
  );
};

export default Contacts;
