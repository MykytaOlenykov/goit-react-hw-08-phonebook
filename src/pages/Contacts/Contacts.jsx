import { useFetchContactsQuery } from 'redux/contacts/slice';
import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList';
import * as S from './Contacts.styled';

const Contacts = () => {
  const { data, isSuccess } = useFetchContactsQuery();
  console.log(data);

  return (
    <S.Section>
      <S.Title>Phonebook</S.Title>

      <ContactForm contacts={data} />

      {/* <S.TitleBox>
        <S.SecondaryTitle>Contacts</S.SecondaryTitle>
        {isFetching && <Loader />}
      </S.TitleBox> */}

      <S.ContactsContainer>
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
