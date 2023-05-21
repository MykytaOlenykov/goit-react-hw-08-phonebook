import { Toaster } from 'react-hot-toast';
import { useFetchContactsQuery } from 'redux/contactsSlice';
import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList';
import { Loader } from 'components/Loaders';
import { ErrorMessage } from 'components/ErrorMessage';
import { GlobalStyle } from 'components/GlobalStyle';
import * as S from './App.styled';

export const App = () => {
  const { data, error, isSuccess, isError, isFetching } =
    useFetchContactsQuery();

  return (
    <S.Container>
      <GlobalStyle />
      <Toaster position="top-center" reverseOrder={false} />

      <S.PrimaryTitle>Phonebook</S.PrimaryTitle>

      <ContactForm contacts={data} />

      <S.TitleBox>
        <S.SecondaryTitle>Contacts</S.SecondaryTitle>
        {isFetching && <Loader />}
      </S.TitleBox>

      <Filter />

      {isError && <ErrorMessage errorText={`Error: ${error.status}`} />}
      {isSuccess && <ContactList contacts={data} />}
    </S.Container>
  );
};
