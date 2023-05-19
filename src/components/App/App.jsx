import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { selectError, selectIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList';
import { Loader } from 'components/Loader';
import { ErrorMessage } from 'components/ErrorMessage';
import { GlobalStyle } from 'components/GlobalStyle';
import * as S from './App.styled';

export const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <S.Container>
      <GlobalStyle />
      <Toaster position="top-center" reverseOrder={false} />

      <S.PrimaryTitle>Phonebook</S.PrimaryTitle>
      <ContactForm />

      <S.TitleBox>
        <S.SecondaryTitle>Contacts</S.SecondaryTitle>
        {isLoading && <Loader />}
      </S.TitleBox>
      <Filter />
      {error && <ErrorMessage errorText={error} />}
      <ContactList />
    </S.Container>
  );
};
